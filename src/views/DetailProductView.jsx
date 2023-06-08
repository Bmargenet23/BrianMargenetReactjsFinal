import React, { Fragment, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import GeneralContext from "../context/GeneralContext";
import useFirestore from "../utils/useFirestore";
import Swal from 'sweetalert2'

const nameCollection = "items";

const DetailProductView = () => {
  const { idProduct: documentId } = useParams();
  const { addToCar } = useContext(GeneralContext);
  const [data] = useFirestore({ nameCollection, documentId });
  const [amount, setAmount] = useState(1);
  const { title, image, description, price, category } = data;

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
    <Fragment>
      <div className="row my-5">
        <div className="col-3 offset-md-3">
          <h2 className="badge bg-primary text-wrap fs-4">Nuevo ingreso!!</h2>
        </div>
        <div className="col-4">
          <h3>
            Categoria: <span className="text-info">{category}</span>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-6 offset-md-3">
          <div className="card mb-3 shadow-sm  py-2 px-5">
            <div className="row ">
              <div className="col-md-4 align-self-center">
                <img src={image} width={500} height={500} className="img-fluid rounded-start " alt="indumentaria" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text">
                    <small className="text-muted">${price}</small>
                  </p>
                  <button onClick={addBtnAction} className="btn btn-outline-danger btn-sm">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailProductView;