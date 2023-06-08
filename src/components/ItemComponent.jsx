import React, { useContext, useState } from "react";
import GeneralContext from "../context/GeneralContext";
import ItemButtonsComponent from "./ItemButtonsComponent";
import Swal from 'sweetalert2'

const ItemComponent = (props) => {
    const { data, showInfo, showDelete } = props;
    const { id: idProduct, title, image, description, price } = data;
    const { removeToCar } = useContext(GeneralContext);

    const showShortValue = (value = "", lengthMax = 45) => {
        return value.length > lengthMax ? value.substring(0, lengthMax).concat(" ...") : value;
    };

    const removeThisItem = () => {
        removeToCar(data);
    };
    const { addToCar } = useContext(GeneralContext);
    const addBtnAction = () => {
        addToCar(data);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Agregado al carro!',
            showConfirmButton: false,
            timer: 1000
        })
    };

    return (
        <div className="card shadow">
            <h5 className="card-header position-relative">
                {showShortValue(title, 20)}
                <ItemButtonsComponent
                    showInfo={showInfo}
                    showDelete={showDelete}
                    idProduct={idProduct}
                    removeThisItem={removeThisItem} />
            </h5>
            <img className="card-img-top img-fluid" width={350} height={350} src={image} alt="Indumentaria" />
            <div className="card-body">
                <p className="text-muted">{showShortValue(description)}</p>
                <p className="h6">Precion del producto - ${price}</p>
                <button onClick={addBtnAction} className="btn btn-outline-danger btn-sm ">
                    Comprar
                </button>
            </div>
        </div>
    );
};

export default ItemComponent;