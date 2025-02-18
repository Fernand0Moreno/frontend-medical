// MedicalAppointments.js
import React, { useState } from 'react';
import './MedicalAppointments.css';

const MedicalAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    patientName: '',
    doctorName: '',
    date: '',
    time: '',
    reason: '',
  });

  const [isEditing, setIsEditing] = useState(false); // Para saber si estamos editando una cita
  const [editIndex, setEditIndex] = useState(null); // Para saber qué cita estamos editando

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({
      ...newAppointment,
      [name]: value,
    });
  };

  const handleAddAppointment = () => {
    if (isEditing) {
      const updatedAppointments = [...appointments];
      updatedAppointments[editIndex] = newAppointment; // Reemplaza la cita editada
      setAppointments(updatedAppointments);
    } else {
      setAppointments([...appointments, newAppointment]); // Agrega una nueva cita
    }
    setNewAppointment({ patientName: '', doctorName: '', date: '', time: '', reason: '' }); // Limpia el formulario
    setIsEditing(false); // Resetear el estado de edición
    setEditIndex(null); // Resetear el índice de edición
  };

  const handleEditAppointment = (index) => {
    const appointmentToEdit = appointments[index];
    setNewAppointment(appointmentToEdit);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDeleteAppointment = (index) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index); // Filtra la cita a eliminar
    setAppointments(updatedAppointments);
  };

  const handleCancelAppointment = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments[index].status = 'Cancelada'; // Cambia el estado de la cita a "Cancelada"
    setAppointments(updatedAppointments);
  };

  return (
    <div className="appointments-container">
      <h2>Gestión de Citas Médicas</h2>

      {/* Formulario para agregar o editar una cita */}
      <div className="appointment-form">
        <input
          type="text"
          name="patientName"
          value={newAppointment.patientName}
          onChange={handleInputChange}
          placeholder="Nombre del Paciente"
        />
        <input
          type="text"
          name="doctorName"
          value={newAppointment.doctorName}
          onChange={handleInputChange}
          placeholder="Nombre del Médico"
        />
        <input
          type="date"
          name="date"
          value={newAppointment.date}
          onChange={handleInputChange}
        />
        <input
          type="time"
          name="time"
          value={newAppointment.time}
          onChange={handleInputChange}
        />
        <textarea
          name="reason"
          value={newAppointment.reason}
          onChange={handleInputChange}
          placeholder="Motivo de la cita"
        ></textarea>
        <button onClick={handleAddAppointment}>
          {isEditing ? 'Modificar Cita' : 'Agregar Cita'}
        </button>
      </div>

      {/* Mostrar las citas médicas registradas */}
      <div className="appointments-list">
        <h3>Citas Registradas</h3>
        <ul>
          {appointments.map((appointment, index) => (
            <li key={index}>
              <p><strong>Paciente:</strong> {appointment.patientName}</p>
              <p><strong>Médico:</strong> {appointment.doctorName}</p>
              <p><strong>Fecha:</strong> {appointment.date}</p>
              <p><strong>Hora:</strong> {appointment.time}</p>
              <p><strong>Motivo:</strong> {appointment.reason}</p>
              <p><strong>Status:</strong> {appointment.status || 'Agendada'}</p>
              <button onClick={() => handleEditAppointment(index)}>Editar</button>
              <button onClick={() => handleDeleteAppointment(index)}>Eliminar</button>
              <button onClick={() => handleCancelAppointment(index)}>Cancelar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MedicalAppointments;
