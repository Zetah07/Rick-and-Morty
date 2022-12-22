/* eslint-disable react/jsx-no-target-blank */

import Styles from "./Modules/Styles.module.css";

export default function About() {
    return (
        <div >
            <div className={Styles.about}>
            <h1> 👋 Hi, I’m Johan Sebastian Castro</h1>
                <p> 
                - 🏡 I currently live in Medellin<br/>
                - 👀 I’m interested in the world Geek, gaming and programming <br/>
                - 🌱 I’m currently learning JavaScript<br/>
                - 💞️ I’m looking to  conociment<br/>
                - 📫 How to reach me in my twitter<br/>
                </p>
                <a href= 'https://github.com/Zetah07' target='_blank'> -🧠 My GitHub </a> 
                </div>
        </div>
    );
}
