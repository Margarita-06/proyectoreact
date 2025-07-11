import React, { useState, useEffect } from 'react';
   
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      const response = await fetch(`/api/users/${userId}`);
      const json = await response.json();
      setUser(json);
    }
    fetchUserData();
  }, [userId]); // Se ejecuta cada vez que cambia userId

  return (
    <div>
      {user ? (
        <div>
          <p>Nombre: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Cargando usuario...</p>
      )}
    </div>
  );
}

export default UserProfile;