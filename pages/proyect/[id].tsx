import { useRouter, NextRouter } from 'next/router';
import Link from 'next/link';
import style from  '../../styles/proyect.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { proyects } from '../../container/arrays/profile';

const Post = () => {

    const router: NextRouter = useRouter();
    const { id } = router.query;
    const proyect = proyects.find(c => c.id == id);
    return (
        <div className={style.proyect}> 
            <Link href={'/'}>
                <a className={style.exit}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </a>
            </Link>
            <h1>{proyect?.name}</h1>
            <div className={style.container}>
                <p>{proyect?.longDescription}</p>
                {
                    proyect?.img ?
                        <img src={proyect?.img} width={200} style={{ borderRadius: '50%' }} />
                    :
                    <>
                      <Link href={'https://github.com'+proyect?.github}>
                          <a><FontAwesomeIcon icon={faGithubSquare} /></a>
                      </Link>  
                    </>
                }
            </div>
        </div>
    )
}

export default Post;