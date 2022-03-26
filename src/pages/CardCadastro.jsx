import React from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Titulo } from "../components/cadastro/Titulo";

export const StyleCadastro = styled.div`
  margin: 0;
  height: 50vh;
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
`;

export const CardCadastro = (props) => {
  let navigate = useNavigate();

  function mudarPagina() {
    navigate("lista");
  }

  return (
    <>
      <Titulo titulo="Cadastre um telefone aqui:" />
      <StyleCadastro>
        <TextField
          id="outlined-multiline-flexible"
          label="Nome"
          multiline
          maxRows={4}
          //value={value}
          //onChange={handleChange}
        />
        <TextField
          id="outlined-textarea"
          label="Telefone"
          placeholder="Placeholder"
          multiline
        />
        <Button onClick={mudarPagina} variant="outlined">
          Salvar
        </Button>
      </StyleCadastro>
    </>
  );
};
