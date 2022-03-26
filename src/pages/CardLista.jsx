import React from "react";
import styled from "styled-components";
import { Titulo } from "../components/lista/Titulo";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const StyleButton = styled.div`
  display: flex;
  justify-content: right;
  padding: 10px;
`;

export const StyleTabela = styled.div`
  height: 50vh;
  width: 80vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: auto;
`;

export const CardLista = () => {
  const contatos = useSelector((store) => store.contatos);
  const navigate = useNavigate();

  console.log(contatos);
  function irParaHome() {
    navigate("/");
  }

  return (
    <>
      <StyleButton>
        <Button onClick={irParaHome} variant="contained">
          Home
        </Button>
      </StyleButton>

      <Titulo titulo="Lista de telefones" />

      <StyleTabela>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Numero</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contatos.map((contato) => {
                return (
                  <TableRow>
                    <TableCell>{contato.nome}</TableCell>
                    <TableCell>{contato.numero}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </StyleTabela>
    </>
  );
};
