import React, { useState } from 'react';

const handleClick = () => {};

const Formulario = () => {
  const [mascota, setMascota] = useState('');
  const [dueño, setDueño] = useState('');
  const [hora, setHora] = useState('');
  const [Fecha, setFecha] = useState('');
  const [Sintomas, setSintomas] = useState('');

  const onMascotaChange = (e) => {
    setMascota(e.target.value);
    setDueño(e.target.value);
    setHora(e.target.value);
    setFecha(e.target.value);
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
            onChange={onMascotaChange}
            required
            size="10"
          />
        </label>
        <br></br>
        <label for="appt" id="Hora" onChange={onMascotaChange}>
          Hora:
        </label>
        <input type="time" />
        <br></br>
        <label for="appt" id="Fecha" onChange={onMascotaChange}>
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

        <label for="name" onChange={onMascotaChange}>
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
