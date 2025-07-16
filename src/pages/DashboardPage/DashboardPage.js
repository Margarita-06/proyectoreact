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
                            <li><a href="/" className="btn btn-primary"> <i> AVEMARIA </i></a></li>
                        </ul>
                        <nav class="navbar navbar-expand-lg bg-body-tertiary">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="#"></a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div class="navbar-nav">
                                        <a class="nav-link active" aria-current="page" href="#">Todo</a>
                                        <a class="nav-link active" aria-current="page" href="#">Esenciales AVEMARIA</a>
                                        <a class="nav-link active" aria-current="page"href="#">Nuevo</a>
                                        <a class="nav-link active" aria-disabled="true">Sobre nosotros</a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <div className="text-end">
                            <a href="/" className="btn btn-primary"><i>Cerrar Sesión</i></a>
                        </div>
                    </div>
                </div>
            </header>

            <div class="d-flex justify-content-center align-items-center vh-100" >
                <p class="fs-1 text-primary fw-bold"><i> AVEMARIA</i></p>
            </div>

        </>
    );
}