import type { NextPage } from "next";
import Link from "next/link";
import style from "../styles/proyects.module.scss";
import { proyects } from "./arrays/profile";

const Proyects: NextPage = () => {

  return (
    <div className={style.proyects}>
      <h1>Mis Proyectos</h1>
      <div className={style.container}>
          {proyects.map(({ name, description, id }, index) => (
            <div className={style.proyect} key={index}>
              <h2>{name}</h2>
              <p>{description}</p>
              <Link href={'/proyect/'+id}>
                <button>
                  <span>Join to proyect</span>
                </button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Proyects;
