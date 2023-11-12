import { BiSearch } from "react-icons/bi";

import styles from "./searchBar.module.css";

export function SearchBar() {
    return (
        <div className={styles.containerSearchBar}>
            <input
                className={styles.searchBar}
                type="text"
                placeholder="pesquise sua lenda"
            />
            <button type="submit" className={styles.searchButton}>
                <BiSearch size={35} />
            </button>
        </div>
    );
}
