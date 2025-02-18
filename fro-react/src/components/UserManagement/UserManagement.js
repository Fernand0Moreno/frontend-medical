// UserManagement.js
import React, { useState } from 'react';
import './UserManagement.css';

const UserManagement = () => {
  const [userData, setUserData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    role: 'paciente', // Por defecto asignamos 'paciente'
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Añadir el nuevo usuario a la lista de usuarios
    setUsers([...users, userData]);

    // Limpiar el formulario después de agregar el usuario
    setUserData({
      name: '',
      address: '',
      email: '',
      phone: '',
      role: 'paciente',
    });
  };

  return (
    <div className="user-management-container">
      <h2>Gestión de Usuarios</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Nombre Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="address">Dirección</label>
          <input
            type="text"
            id="address"
            name="address"
            value={userData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Teléfono</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="role">Tipo de Usuario</label>
          <select
            id="role"
            name="role"
            value={userData.role}
            onChange={handleChange}
            required
          >
            <option value="paciente">Paciente</option>
            <option value="medico">Médico</option>
            <option value="administrativo">Administrativo</option>
          </select>
        </div>
        <button type="submit">Crear Usuario</button>
      </form>

      <h3>Lista de Usuarios</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.address}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
