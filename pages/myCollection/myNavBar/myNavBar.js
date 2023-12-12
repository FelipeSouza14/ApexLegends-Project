import styles from "./myNavBar.module.css";

export default function MyNavBar({stateAuth, func}) {

    const mudar = () => {
        if (stateAuth) {
            func(true);
        }
    }

    return (
        <nav className={styles.myNavBar}>
            <img
                className={styles.logoImagem}
                src={"/assets/logos/logo-sem-fundo.png"}
            />
            <div className={styles.divMyButtons}>
                <button className={styles.myNavButton} onClick={() => mudar()}>Lendas</button>
                <button className={styles.myNavButton}>Armas</button>
                <button className={styles.myNavButton}>Mapas</button>
            </div>
        </nav>
    );
}