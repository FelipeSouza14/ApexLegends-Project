import { CardLegend } from "./legends/legendCard/legendCard";
import { SearchBar } from "./legends/searchBar/searchBar";

import styles from './styles/legendsPage.module.css';

export default function LegendsPage() {
    return (
        <div className={styles.container}>
            <SearchBar/>            
            <CardLegend/>
            <CardLegend/>
        </div>
    )
}