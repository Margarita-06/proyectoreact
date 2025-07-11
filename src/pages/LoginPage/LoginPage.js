// src/LoginPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import Swal from "sweetalert2";

// Simulación local de usuarios registrados
const usuarios = [
  { email: "chus@gmail.com", password: "123" },
  { email: "maria@correo.com", password: "mar123" },
  { email: "carlos@correo.com", password: "car123" },
  { email: "laura@correo.com", password: "lau123" },
  { email: "andres@correo.com", password: "and123" },
  { email: "camila@correo.com", password: "cam123" },
  { email: "david@correo.com", password: "dav123" },
  { email: "paula@correo.com", password: "Pau123" },
  { email: "jose@correo.com", password: "jos123" },
  { email: "valentina@correo.com", password: "val123" },
];

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();

    const user = usuarios.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      Swal.fire({
        icon: "success",
        title: `¡Bienvenido, ${user.email}!`,
        text: "Has iniciado sesión correctamente.",
        confirmButtonColor: "#3085d6",
      }).then(() => {
        navigate("/dashboard");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Acceso denegado",
        text: "Correo o contraseña incorrectos.",
        confirmButtonColor: "#d33",
      });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      Swal.fire({
        icon: "success",
        title: `¡Bienvenido, ${user.displayName || user.email}!`,
        text: "Has iniciado sesión con Google.",
        confirmButtonColor: "#3085d6",
      }).then(() => {
        navigate("/dashboard");
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al iniciar sesión con Google",
        text: "Verifica tu cuenta o intenta de nuevo.",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="card-body p-4">
          <h3 className="card-title text-center mb-4"><i>Iniciar Sesión</i></h3>
          <form onSubmit={handleSumbit} noValidate>
            <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label"><i>Correo electrónico</i></label>
              <input 
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="usuario@ejemplo.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label"><i>Contraseña</i></label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Contraseña"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="rememberCheck" />
              <label className="form-check-label" htmlFor="rememberCheck">
                <i>Recuérdame</i>
              </label>
            </div>
            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-primary btn-lg"><i>Entrar</i></button>
            </div>
          </form>

          <div className="text-center">
            <p className="mb-2">o</p>
            <button type= 'button' className="btn btn-outline-secunadary w-100" onClick={handleGoogleLogin}>
              <i className="bi bi-google"></i> <i>Iniciar sesión con Google</i>
            </button>
          </div>
        </div>

        <div className="card-footer bg-transparent text-center border-0 pb-4">
          <small className="text-muted">
            <i>¿No tienes cuenta? </i><a href="/Register" className="text-decoration-none"><i>Regístrate</i></a>
          </small>
          <br />
          <a href="/Forgot" className="text-decoration-none fs-6">
            <i>¿Olvidaste tu contraseña?</i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
