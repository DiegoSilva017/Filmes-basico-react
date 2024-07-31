import React, { useState, useEffect, useCallback } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./index.css";
//https://api.themoviedb.org/3/movie/now_playing?api_key=5f3897718fc8a5bd4bb8bc40e9c0b3ff

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [carregar, setCarregar] = useState(true);

  useEffect(() => {
    async function carregarApi() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "5f3897718fc8a5bd4bb8bc40e9c0b3ff",
          language: "pt-BR",
          page: 1,
        },
      });

      setFilmes(response.data.results.splice(0, 10));
      setCarregar(false);
      console.log(response.data.results.splice(0, 10));
    }
    carregarApi();
  }, []);
  if (carregar) {
    return <div className="car">Carregando .........</div>;
  } else {
    return (
      <div className="container">
        <div className="lista-filme">
          {filmes.map((item) => {
            return (
              <article key={item.id}>
                <strong className="titulo">{item.title}</strong>
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt={item.title}
                  className="img"
                ></img>
                <Link to={`/sobre/${item.id}`} className="botao">
                  Acessar
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
