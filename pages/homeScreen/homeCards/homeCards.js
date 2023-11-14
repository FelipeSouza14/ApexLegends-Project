import Link from "next/link";
import styles from "./homeCards.module.css";


export function HomeCards (){
    return (
        <div className={styles.divCards}>
            <Link href="/legendsPage" className={styles.linkCardLegends}>
                <div className={styles.cardsHomePage}>
                    <img className={styles.cardLendasImagem} src={"/assets/cards/card-lendas.png"} />
                </div>
            </Link>
            <div className={styles.cardsHomePage}>
                <img className={styles.cardLendasImagem} src={"/assets/cards/card-armas.png"} />
            </div>
            <Link href="/mapsPage" className={styles.linkCardMaps}>
                <div className={styles.cardsHomePage}>
                    <img className={styles.cardLendasImagem} src={"/assets/cards/card-mapas.png"} />
                </div>
            </Link>
        </div>
    )
}