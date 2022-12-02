import "./App.css";
import About from "./components/About";
import Detail from "./components/Detail";
import Nav from "./components/Nav";
import Cards from "./components/Cards.jsx";
import { useState } from "react";
import { Routes, Route } from "react-router";
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

  function onClose(id) {
    setCharacters((oldCharacters) =>
      oldCharacters.filter((char) => char.id !== id)
    );
  }

  return (
  <div className="Boddy">
    <div className="App" style={{ padding: "25px" }}>
      <div className={Styles.mainCardContainer}>
        <Nav onSearch={onSearch} placeholder=" Search U Character Here " />
      </div>
      <hr />
      <Routes>
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  </div>
  );
}

export default App;
