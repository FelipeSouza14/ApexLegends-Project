import { HomeNavBar } from "./homeScreen/homeNavBar/homeNavBar"
import { HomeCards } from "./homeScreen/homeCards/homeCards"
import styles from "./styles/index.module.css"

export default function Main() {
    return(
        <div className={styles.homePage}>
            <HomeNavBar />
            <HomeCards />
        </div>
    )
}