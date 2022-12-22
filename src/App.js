import Styles from "./components/Modules/Styles.module.css";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Detail from "./components/Detail";
import Nav from "./components/Nav";
import Cards from "./components/Cards.jsx";
import Form from "./components/Form.jsx";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAcces] = useState(false);

  const username = "gerencia@Soyhenry.com";
  const password = "Tuki07";

  const Location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  function login(userData) {
    if (userData.username === username && userData.password === password) {
      setAcces(true);
      navigate("/home");
    } else {
      alert("Usuario o contraseña incorrecta");
    }
  }

  function onSearch(character) {
    let characterSistem = {};
    if (character.length >= 1) {
      characterSistem = characters.find(
        (char) => char.id === parseInt(`${character}`)
      );
      }
    if (characterSistem) {
      window.alert(`The character is ${character} ,copied`)
  }else{
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
          {Location.pathname === "/" ? null : <Nav onSearch={onSearch} />}
        </div>
        <div>
        
        </div>
        <hr />
        <Routes>
          <Route path="/" element={<Form login={login} />}></Route>
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
