function LoginPage(){
    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="card shadow-sm" style={{maxWidth: "400px", width: "100%"}}>
            <div className="card-body p-4">
                <h3 className="card-title text-center mb-4">Iniciar Sesión</h3>
                <form id="loginForm" novalidate>
                    <div className="mb-3">
                        <label for="inputEmail" className="form-label">Correo electrónico</label>
                        <input type="email" className="form-control" id="inputEmail" 
                               placeholder="usuario@ejemplo.com" required autocomplete="email" />
                        <div className="invalid-feedback">
                            Por favor ingresa un correo electrónico válido.
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="inputPassword" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="inputPassword" 
                               placeholder="Contraseña" required autocomplete="current-password" />
                        <div className="invalid-feedback">
                            La contraseña es requerida.
                        </div>
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" id="rememberCheck" /> 
                        <label className="form-check-label" for="rememberCheck">
                            Recuérdame
                        </label>
                    </div>
                    <div className="d-grid">
                        <button type="submit" class="btn btn-primary btn-lg">Entrar</button>
                    </div>
                </form>
            </div>
            <div className="card-footer bg-transparent text-center border-0 pb-4">
                <small className="text-muted">
                    ¿No tienes cuenta? <a href="/Register" className="text-decoration-none">Regístrate</a>
                </small>
                <br />
                <a href="/Forgot" className="text-decoration-none fs-6">
                    ¿Olvidaste tu contraseña?
                </a>
            </div>
        </div>
    </div>

    );
}

export default LoginPage;