import React, { useState } from 'react';
import './style.css';
import Formulario from './Formulario';
import Turno from './Turno';

export default function App() {
  const [turnos, setTurnos] = useState([]);
  const agregarTurno = (nuevoTurno) => {
    const turnosActuales = [...turnos];
    turnosActuales.push(nuevoTurno);
    setTurnos(turnosActuales);
  };

  return (
    <div>
      <Formulario onTurnoAgregado={agregarTurno} />
      <h1> ADMINISTRAR TURNOS </h1>
      {turnos.map((turno) => {
        return <Turno data={turno} />
      })}
    </div>
  );
}
