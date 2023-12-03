import { BiSearch } from "react-icons/bi";
import styles from "./searchBar.module.css";
import { getLegendsData } from "../../../api/legendsApi";
import { useState } from "react";


export async function SearchBar() {
    const [search, setSearch] = useState("");

    const data = await getLegendsData();
    const searchLowerCase = search.toLocaleLowerCase();
    const dataSearch = data.filter((p) => {
        return (
            p.nome.toLocaleLowerCase().includes(searchLowerCase) ||
            p.classe.toLocaleLowerCase().includes(searchLowerCase)
        )
    });

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
