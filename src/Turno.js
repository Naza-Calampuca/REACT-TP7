import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const handleOnChange = (e) => {
  props.onMascotaChange(props.mascota);
};

const Turno = (props) => {
  return (
    <StyledMensaje>
      <div className={`caja caja-${props.size}`}>
        <h3>
          <fildset>Mascota: {props.mascota} </fildset>

          <br></br>
          <fildset>Dueño: {props.dueño}</fildset>
          <br></br>
          <fildset>Fecha: {props.fecha} </fildset>
          <br></br>
          <fildset>Hora: {props.hora}</fildset>
          <br></br>
          <fildset>Sintomas: {props.sintomas}</fildset>
          <br></br>
          <button type="button">Eliminar</button>
        </h3>
      </div>
    </StyledMensaje>
  );
};

const StyledMensaje = styled.div`
.caja{
  background-color: pink;
  height: 140px;
}

.caja-chica{
  width: 25%;
}

.caja-grande{
  width: 70%;
}
`;

Turno.propTypes = {
  texto: PropTypes.string.isRequired,
};

export default Turno;
