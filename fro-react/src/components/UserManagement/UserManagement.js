// UserManagement.js
import React, { useState } from 'react';
import './UserManagement.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    userType: '',
  });

  const [isEditing, setIsEditing] = useState(false); // Para saber si estamos editando un usuario
  const [editIndex, setEditIndex] = useState(null); // Para saber qué usuario estamos editando

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleAddUser = () => {
    if (isEditing) {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = newUser; // Reemplaza el usuario editado
      setUsers(updatedUsers);
    } else {
      setUsers([...users, newUser]); // Agrega un nuevo usuario
    }
    setNewUser({ name: '', address: '', email: '', phone: '', userType: '' }); // Limpia el formulario
    setIsEditing(false); // Resetear el estado de edición
    setEditIndex(null); // Resetear el índice de edición
  };

  const handleEditUser = (index) => {
    const userToEdit = users[index];
    setNewUser(userToEdit);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index); // Filtra el usuario a eliminar
    setUsers(updatedUsers);
  };

  return (
    <div className="user-management-container">
      <h2>Gestión de Usuarios</h2>
      <div className="user-form">
        <input
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleInputChange}
          placeholder="Nombre Completo"
        />
        <input
          type="text"
          name="address"
          value={newUser.address}
          onChange={handleInputChange}
          placeholder="Dirección"
        />
        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleInputChange}
          placeholder="Correo Electrónico"
        />
        <input
          type="text"
          name="phone"
          value={newUser.phone}
          onChange={handleInputChange}
          placeholder="Teléfono"
        />
        <select
          name="userType"
          value={newUser.userType}
          onChange={handleInputChange}
        >
          <option value="">Selecciona un tipo de usuario</option>
          <option value="admin">Administrador</option>
          <option value="doctor">Médico</option>
          <option value="patient">Paciente</option>
        </select>
        <button onClick={handleAddUser}>
          {isEditing ? 'Modificar Usuario' : 'Agregar Usuario'}
        </button>
      </div>

      <div className="user-list">
        <h3>Usuarios Registrados</h3>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <p><strong>{user.name}</strong> ({user.userType})</p>
              <p>Dirección: {user.address}</p>
              <p>Email: {user.email}</p>
              <p>Teléfono: {user.phone}</p>
              <button onClick={() => handleEditUser(index)}>Editar</button>
              <button onClick={() => handleDeleteUser(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserManagement;
