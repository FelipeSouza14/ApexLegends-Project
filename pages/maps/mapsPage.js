import styles from "./mapsPage.module.css";

export default function MapsPage(){
    return (
        <div className={styles.mapsPage}>
            <div className={styles.divMaps}>
                <div className={styles.mapsData}>
                    <div className={styles.headDiv}>
                        <h1 className={styles.mapsName}>Nome</h1>
                        <h2 className={styles.favoriteIcon}>ICONE</h2>
                    </div>
                    <img className={styles.mapsImage} src={"/assets/mapas/WORLDS-EDGE/worlds-edge-official.jpg"} />
                </div>
                <div className={styles.mapsData}>
                    <div className={styles.headDiv}>
                        <h1 className={styles.mapsName}>Nome</h1>
                        <h2 className={styles.favoriteIcon}>ICONE</h2>
                    </div>
                    <img className={styles.mapsImage} src={"/assets/mapas/BROKEN-MOON/broken-moon-official.jpg"} />
                </div>
            </div>
        </div>
    )
}