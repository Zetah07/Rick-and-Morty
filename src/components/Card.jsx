import Style from "./Modules/Styles.module.css";

export default function Card(props) {
  return (
    <div className={Style.cardContainer}>
      <div className={Style.card}>
        <div>
          <button onClick={()=>props.onClose(props.id)}>X</button>
          <h2>{props.name}</h2>
        </div>
        <div>
          <h2>{props.species}</h2>
          <h2>{props.gender}</h2>
        </div>
        <div >
          <img className={Style.cardImage} src={props.image} alt="" />
        </div>
      </div>
    </div>
  );
}
