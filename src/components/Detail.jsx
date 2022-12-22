/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";


export default function Detail() {
    const { detailId } = useParams();
    console.log('🚀 ~  file: Detail.jsx:7 ~  Detail ~  detailId', detailId);
    const navigate =useNavigate();
    const [character, setCharacter] = useState("");
    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
        .then((response) => response.json())
        .then((char) => {
            console.log('🚀 ~miami me lo confirmo  :', char);
            
            if (char.name) {
                setCharacter(char);
            } else {
                window.alert("No hay personajes con ese ID");
            }
        })
        // .catch((err) => {
        //     window.alert("No hay personajes con ese ID");
        // });
        return setCharacter({});
    }, []);

    return (
        <div>
            <div>
                <button onClick={()=> navigate("/home")}>Back</button>
            </div>
            <h1>NOMBRE:{character.name}</h1>
            <h2>STATUS:{character.status}</h2>
            <h2>ESPEIE:{character.species}</h2>
            <h2>GENERO:{character.gender}</h2>
            <h2>ORIGIN:{character.origin}</h2>
        </div>
        );
}
