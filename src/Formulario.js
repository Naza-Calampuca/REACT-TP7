import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Formulario = (props) => {
  return (
    <StyledMensaje>
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
        <label for="name">
          Sintomas:
          <input type="text" id="Sintomas" name="name" required size="10" />
        </label>
        <br></br>
        <button type="button">Agregar Turno</button>
        <br></br>
        <br></br>
      </h3>

      <div className={`caja caja-${props.size}`}>
        {props.children}

        <h1> ADMINISTRAR TURNOS </h1>

        <h3>
          Mascota:
          <br></br>
          Dueño:
          <br></br>
          Fecha:
          <br></br>
          Hora:
          <br></br>
          Sintomas:
          <br></br>
          <button type="button">Eliminar</button>
        </h3>
      </div>
    </StyledMensaje>
  );
};

const StyledMensaje = styled.div`
.caja{
  background-color: aquamarine;
  height: 200px;
}

.caja-chica{
  width: 25%;
}

.caja-grande{
  width: 100%;
}
`;

Formulario.propTypes = {
  texto: PropTypes.string.isRequired,
};

export default Formulario;
