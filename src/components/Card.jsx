import Style from "./Modules/Styles.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  console.log('🚀 ~  file: Card.jsx:5 ~  Card ~  props', props);
  return (
    <div className={Style.cardContainer}>
      <div className={Style.card}>
        <section>
          <Link to={`/detail/${props.id}`}>
            <h2 className={Style.cardTitle}>{props.name}</h2>
          </Link>
        </section>
        <section>
          <img className={Style.cardImage} src={props.image} alt="" />
        </section>
        <section className={Style.cardTextContainer}>
          <h2>{props.species}</h2>
          <h2>{props.gender}</h2>
        </section>
        <section>
          <button
            className={Style.cardCloseButton}
            onClick={() => props.onClose(props.id)}
          >
            ✖️
          </button>
        </section>
      </div>
    </div>
  );
}
