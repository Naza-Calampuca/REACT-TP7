import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Formulario = (props) => {
  const [mascota, setMascota] = useState('');
  const [dueno, setDueno] = useState('');
  const [hora, setHora] = useState('');
  const [Fecha, setFecha] = useState('');
  const [Sintomas, setSintomas] = useState('');

  const handleClick = () => {
    const turno = {
      mascota,
      dueno,
      hora,
      Fecha,
      Sintomas,
    };
    props.onTurnoAgregado(turno);
  };

  const onMascotaChange = (e) => {
    setMascota(e.target.value);
  };

  const onDuenoChange = (e) => {
    setDueno(e.target.value);
  };

  const onHoraChange = (e) => {
    setHora(e.target.value);
  };
  const onFechaChange = (e) => {
    setFecha(e.target.value);
  };

  const onSintomasChange = (e) => {
    setSintomas(e.target.value);
  };
  return (
    <div>
      <h1> ADMINISTRADOR DE PACIENTES </h1>
      <br></br>

      <h1> SACAR TURNO </h1>

      <h3>
        <label for="name">
          Nombre Mascota:
          <input
            type="text"
            id="Mascota"
            name="name"
            required
            onChange={onMascotaChange}
            size="10"
          />
        </label>
        <br></br>
        <label for="name">
          Nombre Dueño:
          <input
            type="text"
            id="Dueño"
            name="name"
            onChange={onDuenoChange}
            required
            size="10"
          />
        </label>
        <br></br>
        <label for="appt" id="Hora" onChange={onHoraChange}>
          Hora:
        </label>
        <input type="time" />
        <br></br>
        <label for="appt" id="Fecha" onChange={onFechaChange}>
          Fecha:
        </label>
        <input
          type="date"
          id="start"
          name="trip-start"
          value="2021-10-13"
          min="2017-01-01"
          max="2022-12-31"
        />
        <br></br>
        <label for="name" onChange={onSintomasChange}>
          Sintomas:
          <input type="text" id="Sintomas" name="name" required size="10" />
        </label>
        <br></br>
        <button onClick={handleClick}>Agregar Turno</button>

        <br></br>
        <br></br>
      </h3>
    </div>
  );
};

export default Formulario;
