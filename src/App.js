import "./App.css";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import characters, { Rick } from "./data.js";
import Styles from "./components/Modules/Styles.module.css";

function App() {
  return (
    <>
      <div className="App" style={{ padding: "25px" }}>
        <div className={Styles.mainCardContainer}>
          <Card
            name={Rick.name}
            species={Rick.species}
            gender={Rick.gender}
            image={Rick.image}
            onClose={() => window.alert("Emulamos que se cierra la card")}
          />
        </div>
        <hr />
        {/* <div>
          <Cards characters={characters} />
        </div> */}
        <div className={Styles.multiCardsContainer}>
          {characters.map((character) => (
            <Card
              key={character.id}
              name={character.name}
              gender={character.gender}
              species={character.species}
              image={character.image}
              onClose={() => window.alert("tuky")}
            />
          ))}
        </div>
        <hr />
        <div>
          <SearchBar onSearch={(characterID) => window.alert(characterID)} />
        </div>
        <hr />
      </div>
    </>
  );
}

export default App;
