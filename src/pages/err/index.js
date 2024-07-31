import { Link } from "react-router-dom";
import './index.css'


function Erro(){
    return(<div className="err">
        <h1>404</h1>
        <h2>Pagina nao encontrada</h2>
        <Link to='/'>Veja todos os filmes aqui</Link>
    </div>)
}

export default Erro;