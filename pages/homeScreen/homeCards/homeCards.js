import styles from "./homeCards.module.css";
import { useRouter } from "next/router";
import { useAuth } from "../../../context/authContext";

export default function HomeCards() {
    const { isLoggedIn } = useAuth();
    const router = useRouter();
    const legendsScreen = "/legends/legendsPage";
    const weaponsScreen = "../weapons/weaponsPage";
    const mapsScreen = "../maps/mapsPage";

    const logged = (screen) => {
        if (isLoggedIn) {
            router.push(screen);
        } else {
            router.push("/login");
        }
    };

    return (
        <div className={styles.divCards}>
            <div
                className={styles.cardsHomePage}
                onClick={() => logged(legendsScreen)}
            >
                <img
                    className={styles.cardLendasImagem}
                    src={"/assets/cards/card-lendas.png"}
                />
            </div>
            <div
                className={styles.cardsHomePage}
                onClick={() => logged(weaponsScreen)}
            >
                <img
                    className={styles.cardLendasImagem}
                    src={"/assets/cards/card-armas.png"}
                />
            </div>
            <div
                className={styles.cardsHomePage}
                onClick={() => logged(mapsScreen)}
            >
                <img
                    className={styles.cardLendasImagem}
                    src={"/assets/cards/card-mapas.png"}
                />
            </div>
        </div>
    );
}
