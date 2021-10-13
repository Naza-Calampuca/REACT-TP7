import React, { useState } from 'react';
import './style.css';
import Formulario from './Formulario';
import Turno from './Turno';

export default function App() {
  const [turnos, setTurnos] = useState([]);
  return (
    <div>
      <Formulario />
      <h1> ADMINISTRAR TURNOS </h1>
      <Turno />
    </div>
  );
}
