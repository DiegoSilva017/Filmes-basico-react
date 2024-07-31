import { useState,useEffect } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Favoritos(){
  const [filme,setFilme] = useState([])
 useEffect(()=>{
  let filmeSalvos = localStorage.getItem("@filmes")
  let filmesS = JSON.parse(filmeSalvos) || []

setFilme(filmesS)
console.log(filme);
 },[])

function excluir(id){
    let retir = filme.filter((index)=>{
        return(index.id !== id)
    })

    setFilme(retir)
    localStorage.setItem('@filmes', JSON.stringify(retir))
    toast.success("Filme excluido")
}
    return(
    <div className='meus'>
<h1>Meus Filme</h1>
        {filme.length === 0 && <span>Voce nao possuir filmes salvos</span>}
        
        <ul>
            {filme.map((item)=>{
             return(
                <li key={item.id}>
                    <span>{item.title}</span>
                    <div>
                      <Link to={`/sobre/${item.id}`}>Detalhes</Link>
                      <button onClick={()=>excluir(item.id)}>
                        Excluir
                      </button>
                    </div>
                </li>
             )
            })}
        </ul>
    </div>)
}