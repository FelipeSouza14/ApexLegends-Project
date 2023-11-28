import { CardLegend } from "./legendCard/legendCard";
import { SearchBar } from "./searchBar/searchBar";

import styles from './legendsPage.module.css';

export default function LegendsPage() {
    return (
        <div className={styles.container}>
            <SearchBar/>            
            <CardLegend/>
        </div>
    )
}