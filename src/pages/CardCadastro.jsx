import React from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Titulo } from "../components/cadastro/Titulo";
import { useDispatch } from "react-redux";
import { adicionarContato } from "../redux/Slice";
import { useState } from "react";

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
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");

  let navigate = useNavigate();
  const dispatch = useDispatch();

  function mudarPagina() {
    dispatch(adicionarContato({ nome, numero }));
    navigate("lista");
  }

  function aoAlterarNome(e) {
    setNome(e.target.value);
  }

  function aoAlterarNumero(e) {
    setNumero(e.target.value);
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
          value={nome}
          onChange={aoAlterarNome}
        />
        <TextField
          id="outlined-textarea"
          label="Telefone"
          placeholder=""
          multiline
          value={numero}
          onChange={aoAlterarNumero}
        />
        <Button onClick={mudarPagina} variant="outlined">
          Salvar
        </Button>
      </StyleCadastro>
    </>
  );
};
