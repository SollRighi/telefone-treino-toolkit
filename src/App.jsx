import React from "react";
import { CardCadastro } from "./pages/CardCadastro";
//import { CardTitulo } from "./components/cadastro/Titulo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CardLista } from "./pages/CardLista";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="cadastro" element={<CardCadastro />} />
            <Route path="lista" element={<CardLista />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
