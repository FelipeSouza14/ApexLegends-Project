import styles from "./myNavBar.module.css";

export default function MyNavBar({stateAuth, statePage}) {

    // const mudar = (numb) => {
    //     if (stateAuth && numb === 1) {
    //         funcLendas('showLegends');
    //     }
    //     else if (stateAuth && numb === 2) {
    //         funcWeapons('showWeapons');
    //     }
    // }

    const mudarPagina = (pagina) => {
        if (stateAuth) statePage(pagina);
      };

    // const mud = () => {
    //     if (stateAuth) {
    //         funcWeapons('showWeapons');
    //     }
    // }

    return (
        <nav className={styles.myNavBar}>
            <img
                className={styles.logoImagem}
                src={"/assets/logos/logo-sem-fundo.png"}
            />
            <div className={styles.divMyButtons}>
                <button className={styles.myNavButton} onClick={() => mudarPagina(1)}>Lendas</button>
                <button className={styles.myNavButton} onClick={() => mudarPagina(2)}>Armas</button>
                <button className={styles.myNavButton} onClick={() => mudarPagina(3)}>Mapas</button>
            </div>
        </nav>
    );
}