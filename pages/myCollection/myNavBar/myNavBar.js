import styles from "./myNavBar.module.css";
import Link from "next/link";

export default function MyNavBar({ stateAuth, statePage }) {

    const changePage = (page) => {
        if (stateAuth) statePage(page);
    };

    return (
        <nav className={styles.myNavBar}>
            <Link href="/">
                <img
                    className={styles.logoImagem}
                    src={"/assets/logos/logo-sem-fundo.png"}
                />
            </Link>
            <div className={styles.divMyButtons}>
                <button className={styles.myNavButton} onClick={() => changePage(1)}>Lendas</button>
                <button className={styles.myNavButton} onClick={() => changePage(2)}>Armas</button>
                <button className={styles.myNavButton} onClick={() => changePage(3)}>Mapas</button>
            </div>
        </nav>
    );
}