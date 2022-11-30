import Card from './Card';
import Style from './Modules/Styles.module.css';



export default function Cards(props) {
   const { characters } = props;
   return(
      <div className={Style.multiCardsContainer}> 
         {characters.map(character => (
            <Card 
               key={character.id}
               name={character.name} 
               gender={character.gender} 
               species={character.species} 
               image= {character.image}
               onClose={() => window.alert('tuky')}/>
               ))}
      </div>
   );
}
