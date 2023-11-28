import { useEffect, useState } from "react";
import { getMapsData } from "../../../api/mapsApi";
import { FavoriteButton } from "../../components/favoriteButton/favoriteButton";

import styles from "./mapsData.module.css";

export function MapsData() {
    const [mapsData, setMapsData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getMapsData();
                setMapsData(data);
            } catch (error) {
                console.error("Erro ao buscar dados de mapas", error);
            }
        }

        fetchData();
    }, []); // O segundo argumento [] garante que a função useEffect seja executada apenas uma vez na montagem

    return (
        <div className={styles.divMaps}>
            {mapsData.map((map, index) => (
                <div key={index} className={styles.mapsData}>
                    <div className={styles.headDiv}>
                        <p className={styles.mapsName}>{map.nome}</p>
                        <FavoriteButton size={40} />
                    </div>
                    <img
                        className={styles.mapsImage}
                        src={map.imagem}
                        alt={`Imagem de ${map.nome}`}
                    />
                </div>
            ))}
        </div>
    );
}
