import Card from './Card';
import Style from './Modules/Styles.module.css';



export default function Cards(props) {
   const { characters, onClose } = props;
   return(
      <div className={Style.multiCardsContainer}> 
         {characters.map(character => (
            <Card 
            name={character.name} 
            gender={character.gender} 
            species={character.species} 
            image= {character.image}
            key={character.id}
            id={character.id}
            onClose={onClose}/>
               ))}
      </div>
   );
}
