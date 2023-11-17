import { FavoriteButton } from "../../components/favoriteButton/favoriteButton";
import styles from "./weaponsCategory.module.css";

export default function WeaponsCategory() {
    return (
        <div className={styles.containerWeapons}>
            <div className={styles.backDiv}>
                <div className={styles.frontDiv}>
                    <img src={"/assets/armas/AR/R-301_Carbine.webp"} />
                    <div className={styles.divFavoriteButton}>
                        <p className={styles.nomes}>Carabina r-301</p>
                        <FavoriteButton size={30} />
                    </div>
                </div>
            </div>
            <div className={styles.backDiv}>
                <div className={styles.frontDiv}>
                    <img src={"/assets/armas/AR/VK-47_Flatline.webp"} />
                    <div className={styles.divFavoriteButton}>
                        <p className={styles.nomes}>Flatline</p>
                        <FavoriteButton size={30} />
                    </div>
                </div>
            </div>
            <div className={styles.backDiv}>
                <div className={styles.frontDiv}>
                    <img src={"/assets/armas/AR/HAVOC_Rifle.webp"} />
                    <div className={styles.divFavoriteButton}>
                        <p className={styles.nomes}>Havoc</p>
                        <FavoriteButton size={30} />
                    </div>
                </div>
            </div>
            <div className={styles.backDiv}>
                <div className={styles.frontDiv}>
                    <img src={"/assets/armas/AR/Nemesis_Burst_AR.webp"} />
                    <div className={styles.divFavoriteButton}>
                        <p className={styles.nomes}>Nemesis</p>
                        <FavoriteButton size={30} />
                    </div>
                </div>
            </div>
            <div className={styles.backDiv}>
                <div className={styles.frontDiv}>
                    <img src={"/assets/armas/AR/Hemlok_Burst_AR.webp"} />
                    <div className={styles.divFavoriteButton}>
                        <p className={styles.nomes}>Hemlok</p>
                        <FavoriteButton size={30} />
                    </div>
                </div>
            </div>
        </div>
    );
}
