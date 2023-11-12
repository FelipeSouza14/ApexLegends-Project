import styles from "./homeNavBar.module.css";

export function HomeNavBar(){
    return (
        <nav className={styles.navBar}>
            <img className={styles.logoImagem} src={"/assets/logos/logo-sem-fundo.png"} />
            <div>
                <button className={styles.buttonLogin}>Log in</button>
                <button className={styles. buttonSignin}>Sign in</button>
            </div>
        </nav>
    )
}