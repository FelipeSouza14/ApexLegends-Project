import Link from "next/link";
import styles from "./homeNavBar.module.css";
import { IoPersonCircleOutline } from "react-icons/io5";

export function HomeNavBar(){
    return (
        <nav className={styles.navBar}>
        <img className={styles.logoImagem} src={"/assets/logos/logo-sem-fundo.png"} />
        <div>
            <button className={styles.profileButton}>
                <IoPersonCircleOutline size={45}/>
            </button>
           {/* <Link href="/login"><button className={styles.buttonLogin}>Entrar</button></Link>  
           <Link href="/register"><button className={styles. buttonSignin}>Criar conta</button></Link> */}
        </div>
    </nav>
)
}