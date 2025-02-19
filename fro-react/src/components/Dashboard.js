import React, { useState } from "react";
import GestionHorarios from "./GestionHorarios";
import "./Dashboard.css";

const Dashboard = () => {
  const [mostrarHorarios, setMostrarHorarios] = useState(false);

  return (
    <div className="dashboard-container">
      {mostrarHorarios ? (
        <GestionHorarios onBack={() => setMostrarHorarios(false)} />
      ) : (
        <div className="dashboard-content">
          <h2>Bienvenido al Dashboard</h2>
          <p>Seleccione una opción:</p>
          <button onClick={() => setMostrarHorarios(true)} className="btn">Gestionar Horarios</button>
          <button className="btn">Otra Funcionalidad</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
