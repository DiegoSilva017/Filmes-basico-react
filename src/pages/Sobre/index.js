import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./index.css";
import { toast } from "react-toastify";

import api from "../../services/api";

function Sobre() {
  const { id } = useParams();
  const navegar = useNavigate();

  const [filme, setFilme] = useState({});
  const [carregar, setCarregar] = useState(true);

  useEffect(() => {
    async function carregarApi() {
      await api
        .get(`movie/${id}`, {
          params: {
            api_key: "5f3897718fc8a5bd4bb8bc40e9c0b3ff",
            language: "pt-BR",
          },
        })
        .then((res) => {
          setFilme(res.data);
          setCarregar(false);
          console.log(res.data);
        })
        .catch(() => {
          console.log("Filme nao encontrado");
          navegar("/", {replase: true})
          return
        });
    }

    carregarApi();

    return () => {};
  }, [id,navegar]);

  function salvarFilme(){
     const lista = localStorage.getItem("@filmes")
     let filmeSalvos = JSON.parse(lista) || [];

     let filmesIn = filmeSalvos.some((filmeSalvos) => filmeSalvos.id === filme.id)
     console.log(filmeSalvos.id);
     console.log(filme.id);
      
     if (filmesIn) {
      toast.warn("Esse filme ja esta salvo")
      return;
     }

     filmeSalvos.push(filme)
     localStorage.setItem("@filmes", JSON.stringify(filmeSalvos))
     toast.success("Filme salvo com sucesso")
     
  }

  if (carregar) {
    return <div className="container">Carregando ......</div>;
  } else {
    return (
      <div className="container">
        <h1>{filme.title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
          alt={filme.title}
        />

        <h3>Sinopose</h3>
        <span>{filme.overview}</span>
        <strong>Avaliacao: {filme.vote_average} /10</strong>
        <div className="botao-div">
          <button onClick={salvarFilme}>Salvar</button>
          <button>
            <a href={`https://youtube.com/results?search_query=${filme.title} trailer ` }  target="blank">
              Trailer
            </a>
          </button>
        </div>
      </div>
    );
  }
}

export default Sobre;
