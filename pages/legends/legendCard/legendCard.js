import Link from "next/link";
import { useEffect, useState } from "react";
import { getLegendsData } from "../../../api/legendsApi";

import styles from "./legendCard.module.css";

export function CardLegend() {
    const [legendsData, setLegendsData] = useState([]);

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

    return (
        <div className={styles.cardsContainer}>
            {legendsData.map((legend, index) => (
                <Link
                    key={index}
                    href="/legends/legendData/[legendName]" // [legendName] é um parâmetro dinâmico
                    as={`/legends/legendData/${legend.nome}`} // Nome da lenda como parâmetro
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
    );
}
