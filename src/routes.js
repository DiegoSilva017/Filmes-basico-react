import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Erro from "./pages/err";
import Favoritos from "./pages/favoritos";
import Header from "./components/Header";

function Rotas() {
  return(
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/favoritos" element={<Favoritos/>}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Sobre/:id" element={<Sobre />}></Route>
      <Route path="*" element={<Erro />}></Route>
    </Routes>
  </BrowserRouter>);
}

export default Rotas;
