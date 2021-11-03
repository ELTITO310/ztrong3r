import type { NextPage } from 'next';
import style from '../styles/about.module.scss';

const aboutme: NextPage = () => {

    return (
        <div className={style.aboutme}>
            <h1>ABOUT ME</h1>
            <span></span>
            <p>¡Hola!, me presento!, soy Ztrong3r como me conocen en internet, tengo 12 años y me gusta la tecnologia como todo chico de mi edad.</p>
        </div>
    )

}

export default aboutme;