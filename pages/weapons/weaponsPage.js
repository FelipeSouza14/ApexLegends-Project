import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./weaponsPage.module.css";
import { getWeaponsData } from "../../api/weapons";

export default function WeaponsPage() {
    const [weaponsData, setWeaponsData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getWeaponsData();
                setWeaponsData(data);
            } catch (error) {
                console.error("Erro ao buscar dados de lendas", error);
            }
        }

        fetchData();
    }, []);

    const weaponsClassData = [
        {
            nomeImg: "assalto",
            classe: "Fuzis de assalto",
            css: styles.weaponsClassImage,
        },
        {
            nomeImg: "smg",
            classe: "Submetralhadoras",
            css: styles.weaponsClassImage,
        },
        {
            nomeImg: "lmg",
            classe: "Metralhadoras leves",
            css: styles.weaponsClassImageTwo,
        },
        {
            nomeImg: "atirador",
            classe: "Armas de atirador",
            css: styles.weaponsClassImageTwo,
        },
        {
            nomeImg: "snipers",
            classe: "Fuzis de precisão",
            css: styles.weaponsClassImageTwo,
        },
        {
            nomeImg: "escopetas",
            classe: "Escopetas",
            css: styles.weaponsClassImageTwo,
        },
        {
            nomeImg: "pistolas",
            classe: "Pistolas",
            css: styles.weaponsClassImageThree,
        },
    ];

    return (
        <div className={styles.containerWeapons}>
            {weaponsClassData.map((weapons, index) => (
                <Link
                    key={index}
                    href="./weaponsCategory/[weaponsCategory]"
                    as={`./weaponsCategory/${encodeURIComponent(
                        weapons.classe
                    )}`}
                    className={styles.linkWeaponsCategory}
                >
                    <div className={styles.backDiv}>
                        <div className={styles.frontDiv}>
                            <img
                                src={`/assets/armas/WEAPONS-ICONS/${weapons.nomeImg}-imagem.png`}
                                className={weapons.css}
                            />
                            <p className={styles.nomes}>{weapons.classe}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
