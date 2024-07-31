import { Link } from "react-router-dom";
import './index.css'


function Header(){
    return(
        <header>
          <Link className="logo" to='/'>Dg Flix</Link>
          <Link className="fav" to='/favoritos'>Meus filmes</Link>
        </header>
    )
}

export default Header;