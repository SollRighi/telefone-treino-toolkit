import React from 'react';
import styled from 'styled-components';

export const StyleTitulo = styled.div`
  font-size: 25px;
  font-weight: 200px;
  height: 50vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Titulo = (props) => {
  return (
    <>
      <StyleTitulo>
        {props.titulo}
      </StyleTitulo>
    </>
  )
}