import Link from "next/link";
import styles from "./homeNavBar.module.css";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useAuth } from "../../../context/authContext";
import { useRouter } from 'next/router';



export function HomeNavBar() {
    const { isLoggedIn } = useAuth();
    const router = useRouter();

    const logged = () => {
        if (isLoggedIn) {
            router.push('/login');
        }
        else {
            return (
                // className={styles.divProfile}
                <div className={styles.divProfile}>
                    <p>sair</p>
                </div>
            );
        }
    }

    return (
        <nav className={styles.navBar}>
            <img className={styles.logoImagem} src={"/assets/logos/logo-sem-fundo.png"} />
            <div>
                <button className={styles.profileButton} onClick={logged}>
                    <IoPersonCircleOutline size={45} />
                </button>
                {/* <Link href="/login"><button className={styles.buttonLogin}>Entrar</button></Link>  
           <Link href="/register"><button className={styles. buttonSignin}>Criar conta</button></Link> */}
            </div>
        </nav>
    )
}