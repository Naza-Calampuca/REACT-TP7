import React, { useState } from 'react';

const Formulario = () => {
  return (
    <div>
      <h1> ADMINISTRADOR DE PACIENTES </h1>
      <br></br>

      <h1> SACAR TURNO </h1>

      <h3>
        <label for="name">
          Nombre Mascota:
          <input type="text" id="Mascota" name="name" required size="10" />
        </label>
        <br></br>
        <label for="name">
          Nombre Dueño:
          <input type="text" id="Dueño" name="name" required size="10" />
        </label>
        <br></br>
        <label for="appt" id="Hora">
          Hora:
        </label>
        <input type="time" />
        <br></br>
        <label for="appt" id="Hora">
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

        <label for="name">
          Sintomas:
          <input type="text" id="Sintomas" name="name" required size="10" />
        </label>
        <br></br>
        <button type="button">Agregar Turno</button>
        <br></br>
        <br></br>
      </h3>
    </div>



  );
};

export default Formulario;
