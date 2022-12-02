import "./App.css";
import Nav from "./components/Nav";
import Cards from "./components/Cards.jsx";
import { useState } from "react";
import Styles from "./components/Modules/Styles.module.css";

function App() {
  const [characters, setCharacters] = useState([]);
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  function onClose(id){
    setCharacters(oldCharacters => 
      oldCharacters.filter(char => char.id !==id)
    )}


  return (
    <div className="App" style={{ padding: "25px" }}>
      <div className={Styles.mainCardContainer}>
        <Nav onSearch={onSearch} placeholder=" Search U Character Here " />
      </div>
        <hr />
        <div>
          <Cards onClose={onClose} characters={characters} />
        </div>

        <hr />
    </div>
  );
}

export default App;
