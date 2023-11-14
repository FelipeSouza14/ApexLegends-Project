import styles from "./mapsData.module.css";

export function MapsData (){
    return (
        <div className={styles.divMaps}>
            <div className={styles.mapsData}>
                <div className={styles.headDiv}>
                    <h1 className={styles.mapsName}>WORLDS EDGE</h1>
                    <h2 className={styles.favoriteIcon}>ICONE</h2>
                </div>
                <img className={styles.mapsImage} src={"/assets/mapas/WORLDS-EDGE/worlds-edge-official.jpg"} />
            </div>
            <div className={styles.mapsData}>
                <div className={styles.headDiv}>
                    <h1 className={styles.mapsName}>BROKEN MOON</h1>
                    <h2 className={styles.favoriteIcon}>ICONE</h2>
                </div>
                <img className={styles.mapsImage} src={"/assets/mapas/BROKEN-MOON/broken-moon-official.jpg"} />
            </div>
        </div>
    )
}