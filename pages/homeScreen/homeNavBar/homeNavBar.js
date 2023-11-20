import Link from "next/link";
import styles from "./homeNavBar.module.css";

export function HomeNavBar(){
    return (
        <nav className={styles.navBar}>
        <img className={styles.logoImagem} src={"/assets/logos/logo-sem-fundo.png"} />
        <div>
           <Link href="/login"><button className={styles.buttonLogin}>Log in</button></Link>  
           <Link href="/register"><button className={styles. buttonSignin}>Sign in</button></Link>
        </div>
    </nav>
)
}