import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";
import Style from "./Modules/Styles.module.css";


export default function Nav(props) {

  
  return (
    <div>
      {/* <div ><img src="Rick-and-Morty.png" alt="rick" width="270px"/></div> */}
      <Link to={"/home"}>
        <span className={Style.Home__buttom}>HOME</span>
      </Link>

      <Link to={"/about"}>
        <span className={Style.Home__buttom} >ABOUT</span>
      </Link>
      <div >
        _______________
        <SearchBar  onSearch={props.onSearch} />
      </div>
      
    </div>
  ) 
}
