import React, { useState } from "react";

export default function SearchBar(props) {
   const [character, setCharacter] = useState("");

function handleChange(e) {
   setCharacter(e.target.value);
}
let handleKeyPress = (event) => {
   if (event.keyCode === 13) {
      props.onSearch(character);
   }
   };
return (
   <div>
      <input
         placeholder="Search you character"
         type="search"
         value={character}
         onChange={handleChange}
         onKeyPress={handleKeyPress}
      />
      <button onClick={() => props.onSearch(character)}>Search</button>
   </div>
   );
}
