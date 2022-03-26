import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "contatos",
  initialState: [],

  reducers: {
    adicionarContato(state, { payload }) {
      return [...state, { nome: payload.nome, numero: payload.numero }];
    },
  },
});

export const { adicionarContato } = slice.actions;

export default slice.reducer;
