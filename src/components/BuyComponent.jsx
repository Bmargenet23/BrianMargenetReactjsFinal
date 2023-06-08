import React, { Fragment, useContext, useMemo } from "react";
import GeneralContext from "../context/GeneralContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const collectionOrders = "orders";

const BuyComponent = () => {
    const { car, cleanCar } = useContext(GeneralContext);
    const navigate = useNavigate();

    const _totalCompra = useMemo(() => {
        return car.reduce((partialSum, item) => partialSum + item.price, 0);
    }, [car]);

    const _order = useMemo(() => {
        const items = car.map((item) => ({ item, amount: 1 }));
        const date = new Date().toLocaleDateString("es-MX");
        return { items, date };
    }, [car]);

    const actionBuy = () => {
        const db = getFirestore();
        const orderCollection = collection(db, collectionOrders);
        addDoc(orderCollection, _order).then(({ id }) => {
            Swal.fire(`Orden de compra creada: ${id}`);
            cleanCar();
            navigate("/");
        });
    };

    return (
        <Fragment>
            <div className="row">
                <div className="col-10"></div>
                <div className="col-5">
                    <table className="table table-dark table-striped">
                        <tbody>
                            <tr>
                                <td className="h4 " colSpan={2}>Detalle de venta:</td>
                            </tr>
                            <tr>
                                <td className="h5">Prendas: </td>
                                <td className="h5"> {" " + car.length + " "} Unidades</td>
                            </tr>
                            <tr>
                                <td className="h5">Total: </td>
                                <td className="h5">${_totalCompra}</td>
                            </tr>
                            <tr>
                                <td className="text-center" colSpan={2}>
                                    <button disabled={car.length === 0} onClick={actionBuy} className="btn btn-success mt-5">
                                        Comprar
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    );
};

export default BuyComponent;