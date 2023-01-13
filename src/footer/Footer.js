import React from 'react' 
import style from './Footer.module.css'
import { FaYoutube, FaTwitter, FaInstagramSquare } from "react-icons/fa";
function Footer() {
  return (
    <div className={style.wholePage}>
      <footer className={style.footer}>
          <div className={style.mainContent}>
          <div className={style.socialLinks}>
          <h3 className={style.logoName}>GYM</h3>
          <p className={style.paragraph}> 92nd Street Young Men's and Young Women's Hebrew Association</p>
          <div className={style.Icons}>
            <a
            href="https://www.youtube.com/"
            target="_blank"
            className={style.anchor}
            >
            <FaYoutube />
            </a>
            <a
            href="https://www.instagram.com/"
            target="_blank"
            className={style.anchor}
            >
            <FaInstagramSquare />
            </a>
            <a
            href="https://twitter.com/"
            target="_blank"
            className={style.anchor}
            >
            <FaTwitter />
            </a>
            </div>
            </div>
            <div className={style.healthyLiving}>
            <h4 className={style.sections}>
            <span className={style.heading}>Healthy Living</span>
            </h4>
            <ul className={style.UnorderList}>
            <li className={style.list}>Eat nuts and seeds</li>
            <li className={style.list}>Get enough sleep</li>
            <li className={style.list}>Stay hydrated</li>
            <li className={style.list}>Take vitamin D</li>
            </ul>
            </div>
            <div className={style.services}>
            <h4 className={style.sections}>
            <span className={style.heading}>Services</span>
            </h4>
            <ul className={style.UnorderList}>
            <li className={style.list}>Cardio Court</li>
            <li className={style.list}>Pool</li>
            <li className={style.list}>Excercize studio</li>
            <li className={style.list}>Locker Room and other services</li>
            </ul>
            </div>
            <div className={style.programs}>
            <h4 className={style.sections}>
            <span className={style.heading}>Programs</span>
            </h4>
            <ul className={style.UnorderList}>
            <li className={style.list}>Corporate membership</li>
            <li className={style.list}>Personal Tranning</li>
            <li className={style.list}>Group Program</li>
            <li className={style.list}>Quick Result Program</li>
            </ul>
            </div>
            </div>
            <div className={style.copyright}>
            <p>@2023 Functioup all right reserved</p>
            </div>
    </footer>
    </div>
  );
}

export default Footer