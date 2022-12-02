import React, { useState } from "react";

export default function SearchBar(props) {
const [character, setCharacter] = useState("");

function handleChange(e) {
   setCharacter(e.target.value);
}
return (
   <div>
      <input type="search" value={character} onChange={handleChange} />
      <button onClick={()=>props.onSearch(character)} >Search</button>
   </div>
);
}
