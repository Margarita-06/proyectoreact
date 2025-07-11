import React from "react";

export default function HeadersExample() {
    return (
        <>

            <header className="p-3 text-bg-primary border-bottom">

                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                                <use xlinkHref="#bootstrap" />
                            </svg>
                        </a>
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="/" className="btn btn-primary"> <i>Bienvenido </i></a></li>
                        </ul>
                        <div className="text-end">
                            <a href="/" className="btn btn-primary"><i>Cerrar Sesión</i></a>
                        </div>
                    </div>
                </div>
            </header>

            <div class="d-flex justify-content-center align-items-center vh-100" >
                <p class="fs-1 text-primary fw-bold"><i>Bienvenido a la interfaz</i></p>
            </div>

        </>
    );
}