// App.js
import React, { useState } from 'react';
import Login from './components/Login';
import UserManagement from './components/UserManagement/UserManagement'; // Importamos el componente de gestión de usuarios

function App() {
  const [showUserManagement, setShowUserManagement] = useState(false);

  // Función para mostrar la página de gestión de usuarios
  const handleShowUserManagement = () => {
    setShowUserManagement(true);
  };

  return (
    <div className="App">
      {showUserManagement ? (
        <UserManagement /> // Si el estado es true, mostramos la página de gestión de usuarios
      ) : (
        <Login onRegisterClick={handleShowUserManagement} /> // Si no, mostramos la página de login
      )}
    </div>
  );
}

export default App;
