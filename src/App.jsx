import React from "react";
import { CardCadastro } from "./pages/CardCadastro";
//import { CardTitulo } from "./components/cadastro/Titulo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardLista } from "./pages/CardLista";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardCadastro />} />
          <Route path="lista" element={<CardLista />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
