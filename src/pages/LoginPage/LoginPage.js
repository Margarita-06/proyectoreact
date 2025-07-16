import { useState } from 'react';
import Swal from 'sweetalert2';
import { auth, googleProvider, db } from '../../firebase';
import { signInWithEmailAndPassword, fetchSignInMethodsForEmail, linkWithCredential, EmailAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // LOGIN CON EMAIL/PASSWORD
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire("Campos vacíos", "Por favor llena todos los campos.", "warning");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Opcional: verificar si existe documento en Firestore
      const userDocRef = doc(db, 'usuarios', user.uid);
      const userSnap = await getDoc(userDocRef);

      if (userSnap.exists()) {
        const data = userSnap.data();
        if (data.estado === "Inactivo") {
          Swal.fire("Acceso denegado", "Tu cuenta está inactiva. Contacta al administrador.", "error");
          return;
        }
      }

      Swal.fire({
        title: "¡Bienvenido!",
        text: `Sesión iniciada como ${user.email}`,
        icon: "success",
        timer: 2000,
        showConfirmButton: false
      }).then(() => {
        window.location.href = "/dashboard";
      });

    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Credenciales incorrectas o usuario no existe.", "error");
    }
  };

  // LOGIN CON GOOGLE
  const handleGoogleLogin = async () => {
    try {
      const googleResult = await signInWithPopup(auth, googleProvider);
      const user = googleResult.user;

      // Verificar si ya existía ese correo con otro método
      const signInMethods = await fetchSignInMethodsForEmail(auth, user.email);

      if (signInMethods.includes('password')) {
        // Si existe por password hay que vincularlo
        const password = await solicitarPassword();
        if (!password) {
          Swal.fire("Cancelado", "Operación cancelada.", "info");
          return;
        }

        // Crear credential de email/password
        const credential = EmailAuthProvider.credential(user.email, password);
        await linkWithCredential(user, credential);
      }

      Swal.fire({
        title: "¡Bienvenido!",
        text: `Sesión iniciada con Google: ${user.email}`,
        icon: "success",
        timer: 2000,
        showConfirmButton: false
      }).then(() => {
        window.location.href = "/dashboard";
      });

    } catch (error) {
      console.error(error);
      Swal.fire("Error", "No se pudo iniciar sesión con Google.", "error");
    }
  };

  const solicitarPassword = async () => {
    const result = await Swal.fire({
      title: "Contraseña requerida",
      input: "password",
      inputLabel: "Introduce tu contraseña para vincular cuentas",
      inputPlaceholder: "Tu contraseña",
      showCancelButton: true,
      confirmButtonText: "Vincular",
      cancelButtonText: "Cancelar"
    });

    if (result.isConfirmed && result.value) {
      return result.value;
    }
    return null;
  };
  
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="card-body p-4">
          <h3 className="card-title text-center mb-4"><i>Iniciar Sesión</i></h3>
          <form onSubmit={handleSubmit}>
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
