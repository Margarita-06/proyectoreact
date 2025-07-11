import React, { useState } from 'react';

function MiComponente() {
  const [nombre, setNombre] = useState('Margarita');
  const [edad, setEdad] = useState(15);

  return (
    <div>
      <p>Nombre: {nombre}, Edad: {edad}</p>
      <button onClick={() => setNombre('Angie')}>Cambiar Nombre</button>
      <button onClick={() => setEdad(edad + 1)}>Incrementar Edad</button>
    </div>
  );
}

export default MiComponente;