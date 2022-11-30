import Card from './Card';



export default function Cards(props) {
   const { characters } = props;
   return(
      <div className="cards"> 
         {characters.map(character => (
            <Card 
               name={character.name} 
               gender={character.gender} 
               species={character.species} 
               image= {character.image}
               key={character.id}
               onClose={() => window.alert('tuky')}/>
               ))}
      </div>
   );
}
