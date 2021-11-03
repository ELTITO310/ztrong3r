import type { NextPage, NextPageContext } from "next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import style from '../styles/Home.module.scss';


const Home: NextPage = () => {

  
  return (
        <div className={style.stronger}>
          {/* <img src="/AvatarStronger.png" alt="logo" className={style.img} /> */}
        <h1>Ztrong3r</h1>
      <div className={style.bottom}>
        <div className={style.flechita}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        Dezliza para ver más contenido :D
      </div>
    </div>
  );
};

export default Home;
