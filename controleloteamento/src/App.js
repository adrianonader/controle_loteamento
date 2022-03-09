import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Lotes from "./Components/lotes";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import MenuLateral from "./Components/MenuLateral/MenuLateral";
import PaginaInicial from "./Components/PaginaInicial/PaginaInicial";
import CadastroLotes from "./Components/CadastroLotes/CadastroLotes";
import Loteamentos from "./Components/Loteamentos/Loteamentos";
import TituloLoteamento from "./Components/CadTituloLoteamento/CadTituloLoteamento.jsx";
const API_URL = "http://localhost:3000/api/v1/lotes";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

function App() {
  const [lotes, setLotes] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setLotes(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div>
      <Nav />
      <MenuLateral />
      <Lotes lotes={lotes} />
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="cadastro" element={<CadastroLotes />} />
        <Route path="loteamento" element={<Loteamentos lotes={lotes} />} />
        <Route
          path="cadloteamento"
          element={<TituloLoteamento lotes={lotes} />}
        />
        <Route path="tituloloteamento" element={<TituloLoteamento />} />
      </Routes>
    </div>
  );
}

export default App;
