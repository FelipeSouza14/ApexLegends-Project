import Link from "next/link";
import { useEffect, useState } from "react";
import { getLegendsData } from "../../../api/legendsApi";

import styles from "./legendCard.module.css";
import { SearchBar } from "../searchBar/searchBar";




export function CardLegend() {
    const [legendsData, setLegendsData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getLegendsData();
                setLegendsData(data);
            } catch (error) {
                console.error("Erro ao buscar dados de lendas", error);
            }
        }

        fetchData();
    }, []);


    const filteredLegends = legendsData.filter((legend) =>
        legend.nome.toLowerCase().includes(search.toLowerCase()) ||
        legend.classe.toLowerCase().includes(search.toLowerCase())

    );

    return (
        <div>
            <SearchBar setSearch={setSearch} />,
            <div className={styles.cardsContainer}>
                {filteredLegends.map((legend, index) => (
                    <Link
                        key={index}
                        href="/legends/legendData/[legendName]"
                        as={`/legends/legendData/${legend.nome}`}
                        className={styles.linkLegendData}
                    >
                        <figure className={styles.figureContainer}>
                            <img
                                src={legend.imagem}
                                width={350}
                                alt={`Imagem de ${legend.nome}`}
                            />
                            <figcaption>{legend.nome}</figcaption>
                        </figure>
                    </Link>
                ))}
            </div>
        </div>
    );
}
