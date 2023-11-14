import styles from "./mapsPage.module.css";
import { MapsData } from "./mapsData/mapsData";

export default function MapsPage(){
    return (
        <div className={styles.mapsPage}>
                <MapsData />
        </div>
    )
}