import type { NextPage } from "next";
import Home from "../container/home";
import AboutMe from "../container/aboutme";
import Proyects from '../container/proyects'
import style from "../styles/index.module.scss";

const Index: NextPage = () => {
  return (
    <>
      <Home />
      <div className={style.svg}>
        <svg
          style={{ position: "absolute", bottom: 0, left: 0 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#5000ca"
            fillOpacity="1"
            d="M0,128L48,138.7C96,149,192,171,288,176C384,181,480,171,576,192C672,213,768,267,864,272C960,277,1056,235,1152,208C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <AboutMe/>
      <div className={style.svg2}>
        <svg
        style={{position: 'absolute', bottom: 0, left: 0}}
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#00cba9"
            fillOpacity="1"
            d="M0,160L0,96L288,96L288,160L576,160L576,128L864,128L864,64L1152,64L1152,128L1440,128L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Proyects />
    </>
  );
};

export default Index;
