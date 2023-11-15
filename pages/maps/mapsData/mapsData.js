import { FavoriteButton } from "../../components/favoriteButton/favoriteButton";

import styles from "./mapsData.module.css";

export function MapsData (){
    return (
        <div className={styles.divMaps}>
            <div className={styles.mapsData}>
                <div className={styles.headDiv}>
                    <p className={styles.mapsName}>CONFINS DO MUNDO</p>
                    <FavoriteButton size={40}/>
                </div>
                <img className={styles.mapsImage} src={"/assets/mapas/WORLDS-EDGE/worlds-edge-official.jpg"} />
            </div>
            <div className={styles.mapsData}>
                <div className={styles.headDiv}>
                    <p className={styles.mapsName}>DESFILADEIRO DO REI</p>
                    <FavoriteButton size={40}/>
                </div>
                <img className={styles.mapsImage} src={"/assets/mapas/KINGS-CANYON/kings-canyon-official.jpg"} />
            </div>
        </div>
    )
}