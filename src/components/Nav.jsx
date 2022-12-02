import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";

export default function Nav(props) {
  
  
  return (
    <div>
      <Link to={"/home"}>
        <span>HOME</span>
      </Link>

      <Link to={"/about"}>
        <span>ABOUT</span>
      </Link>
      <div>
        Barra de Navegación
        <SearchBar onSearch={props.onSearch} />
      </div>
    </div>
  ) 
}
