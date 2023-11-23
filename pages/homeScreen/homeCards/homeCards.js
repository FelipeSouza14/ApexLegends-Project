import Link from "next/link";
import styles from "./homeCards.module.css";

export function HomeCards() {
    return (
        <div className={styles.divCards}>
            <Link href="/legends/legendsPage">
                <div className={styles.cardsHomePage}>
                    <img
                        className={styles.cardLendasImagem}
                        src={"/assets/cards/card-lendas.png"}
                    />
                </div>
            </Link>
            <Link href="../weapons/weaponsPage">
                <div className={styles.cardsHomePage}>
                    <img
                        className={styles.cardLendasImagem}
                        src={"/assets/cards/card-armas.png"}
                    />
                </div>
            </Link>
            <Link href="../maps/mapsPage">
                <div className={styles.cardsHomePage}>
                    <img
                        className={styles.cardLendasImagem}
                        src={"/assets/cards/card-mapas.png"}
                    />
                </div>
            </Link>
        </div>
    );
}
