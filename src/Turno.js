import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const handleClick = (props) => {

};

const Turno = (props) => {
  return (
    <StyledMensaje>
      <div className={`caja caja-${props.size}`}>
        <h3>
          <fildset>Mascota: {props.data.mascota} </fildset>

          <br></br>
          <fildset>Dueño: {props.data.dueno}</fildset>
          <br></br>
          <fildset>Fecha: {props.data.fecha} </fildset>
          <br></br>
          <fildset>Hora: {props.data.hora}</fildset>
          <br></br>
          <fildset>Sintomas: {props.data.sintomas}</fildset>
          <br></br>
          <button onClick={handleClick}>Eliminar</button>
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
