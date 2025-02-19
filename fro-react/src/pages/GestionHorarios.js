import React, { useState } from "react";
import "./GestionHorarios.css";

const GestionHorarios = ({ onBack }) => {
  const [horarios, setHorarios] = useState([]);

  const [formData, setFormData] = useState({
    dia: "",
    horaInicio: "",
    horaFin: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const agregarHorario = () => {
    if (formData.dia && formData.horaInicio && formData.horaFin) {
      setHorarios([...horarios, formData]);
      setFormData({ dia: "", horaInicio: "", horaFin: "" });
    }
  };

  const eliminarHorario = (index) => {
    const nuevosHorarios = horarios.filter((_, i) => i !== index);
    setHorarios(nuevosHorarios);
  };

  return (
    <div className="horarios-container">
      <h2>Gestión de Horarios</h2>
      <div className="form-group">
        <label>Día:</label>
        <select name="dia" value={formData.dia} onChange={handleChange}>
          <option value="">Seleccionar Día</option>
          <option value="Lunes">Lunes</option>
          <option value="Martes">Martes</option>
          <option value="Miércoles">Miércoles</option>
          <option value="Jueves">Jueves</option>
          <option value="Viernes">Viernes</option>
          <option value="Sábado">Sábado</option>
          <option value="Domingo">Domingo</option>
        </select>
      </div>
      <div className="form-group">
        <label>Hora Inicio:</label>
        <input type="time" name="horaInicio" value={formData.horaInicio} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Hora Fin:</label>
        <input type="time" name="horaFin" value={formData.horaFin} onChange={handleChange} />
      </div>
      <button onClick={agregarHorario} className="btn-agregar">Agregar Horario</button>

      <h3>Horarios Configurados:</h3>
      <ul>
        {horarios.map((horario, index) => (
          <li key={index}>
            {horario.dia}: {horario.horaInicio} - {horario.horaFin}
            <button className="btn-eliminar" onClick={() => eliminarHorario(index)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <button className="btn-volver" onClick={onBack}>Volver</button>
    </div>
  );
};

export default GestionHorarios;