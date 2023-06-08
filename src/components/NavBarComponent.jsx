import React, { memo, useContext, useMemo } from "react";
import ListOptionNavBarComponent from "./ListOptionNavBarComponent";
import { NavLink } from "react-router-dom";
import GeneralContext from "../context/GeneralContext";
import useFirestore from "../utils/useFirestore";
const nameCollection = "categories";

const NavBarComponent = (props) => {
    const { car } = useContext(GeneralContext);
    const [data] = useFirestore({ nameCollection });

    const dataProcess = useMemo(() => {
        const categoriesObject = data.length !== 0 ? data[0] : [];
        return "category" in categoriesObject ? categoriesObject.category : [];
    }, [data]);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img
                        width={100}
                        height={100}
                        src="https://cdn-icons-png.flaticon.com/512/7209/7209847.png"
                        alt=""
                        srcSet=""
                    />
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ListOptionNavBarComponent nameOption={dataProcess}></ListOptionNavBarComponent>
                </div>
                {car.length !== 0 ? (
                    <NavLink className="text-muted" to="/products/car">
                        <button className="btn btn-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg> : 
                        {car.length}
                        </button>
                    </NavLink>
                ) : (
                    ""
                )}
            </div>
        </nav>
    );
};

export default memo(NavBarComponent);