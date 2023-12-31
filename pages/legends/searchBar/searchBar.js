import { BiSearch } from "react-icons/bi";
import styles from "./searchBar.module.css";

export default function SearchBar({ setSearch }) {
    return (
        <div className={styles.containerSearchBar}>
            <input
                className={styles.searchBar}
                type="text"
                placeholder="pesquise sua lenda por nome ou classe"
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className={styles.searchButton}>
                <BiSearch size={35} />
            </div>
        </div>
    );
}
