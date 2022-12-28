/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */

import Styles from "./Modules/Styles.module.css";


export default function About() {
    return (
        <div >
            <div className={Styles.about}>
            <h1> 👋 Hi, I’m Johan Sebastian Castro</h1>
            <h3> 👀 click my image to redirect to Github</h3>
            
            <a href= 'https://github.com/Zetah07' target='_blank'><img src="./838-01.jpg" alt="About" className={Styles.img__about}/> </a>
                </div>
        </div>
    );
}
