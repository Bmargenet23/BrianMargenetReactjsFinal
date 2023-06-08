import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
const ItemButtonsComponent = ({ showDelete, showInfo, removeThisItem, idProduct }) => {
    return (
        <Fragment>
            {showDelete ? (
                <button className="btn btn-danger btn-sm position-absolute top-0 end-0 m-1" onClick={removeThisItem}>
                    x
                </button>
            ) : (
                ""
            )}
            {showInfo ? (
                <NavLink to={`/products/detail/${idProduct}`}>
                    <button className="btn btn-outline-dark btn-sm position-absolute top-0 end-0 m-1">+ info</button>
                </NavLink>
            ) : (
                ""
            )}
        </Fragment>
    );
};

export default ItemButtonsComponent;