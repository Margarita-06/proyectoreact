import React, { useState } from 'react';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Correo enviado a:', email);
    alert('Enlace de recuperación enviado a tu correo.');
    // Aquí podrías hacer una llamada a tu backend con fetch o axios
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <h2 className="text-center mb-3">Recuperar Contraseña</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Enviar enlace de recuperación
              </button>
            </div>
          </form>

          <div className="mt-3 text-center">
            <a href="/">Volver al inicio de sesión</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
