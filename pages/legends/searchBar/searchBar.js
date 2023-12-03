import { BiSearch } from "react-icons/bi";
import styles from "./searchBar.module.css";

export function SearchBar({ setSearch }) {
    return (
        <div className={styles.containerSearchBar}>
            <input
                className={styles.searchBar}
                type="text"
                placeholder="pesquise sua lenda por nome ou classe"
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className={styles.searchButton}>
                <BiSearch size={35} />
            </button>
        </div>
    );
}
