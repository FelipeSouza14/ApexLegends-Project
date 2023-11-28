import { useRouter } from "next/router";
import { FavoriteButton } from "../../components/favoriteButton/favoriteButton";
import { getLegendsData } from "../../../api/legendsApi";

import styles from "./legendData.module.css";

export default function LegendData({ legendDetails }) {
    const router = useRouter();
    const { legendName } = router.query;

    return (
        <div className={styles.containerPage}>
            <div className={styles.divDataBackground}>
                <img src={legendDetails.imagem} width={420} />
                <div className={styles.containerData}>
                    <div className={styles.containerTitles}>
                        <div>
                            <p className={styles.name}>{legendName}</p>
                            <p className={styles.title}>
                                {legendDetails.titulo}
                            </p>
                        </div>
                        <FavoriteButton size={35} />
                    </div>

                    <div className={styles.legendInfo}>
                        <p>
                            Nome real <br /> Idade <br /> Planeta-natal <br />
                            Classe
                        </p>
                        <p className={styles.legendInfoData}>
                            {legendDetails.nomeReal} <br />
                            {legendDetails.idade} <br />
                            {legendDetails.planetaNatal} <br />
                            {legendDetails.classe}
                        </p>
                    </div>

                    <div className={styles.containerAbilities}>
                        <figure>
                            <img
                                src={legendDetails.imgTatica}
                                alt="Imagem da habilidade tática"
                            />
                            <figcaption className={styles.abilityType}>
                                HABILIDADE TÁTICA
                            </figcaption>
                            <figcaption>{legendDetails.habTatica}</figcaption>
                        </figure>

                        <figure>
                            <img
                                src={legendDetails.imgPassiva}
                                alt="Imagem da habilidade passiva"
                            />
                            <figcaption className={styles.abilityType}>
                                HABILIDADE PASSIVA
                            </figcaption>
                            <figcaption>{legendDetails.habPassiva}</figcaption>
                        </figure>

                        <figure>
                            <img
                                src={legendDetails.imgSuprema}
                                alt="Imagem da habilidade suprema"
                            />
                            <figcaption className={styles.abilityType}>
                                HABILIDADE SUPREMA
                            </figcaption>
                            <figcaption>{legendDetails.habSuprema}</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const { legendName } = context.params; // Desestruturação do objeto

    try {
        // Chama a função getLegendsData para buscar todos os dados das lendas
        const legendsData = await getLegendsData();

        // Encontra os detalhes da lenda com base no nome fornecido na URL
        const legendDetails = legendsData.find(
            (legend) => legend.nome === legendName
        );

        //Verifica se a lenda foi encontrada. Se não, renderiza a página de erro 404.
        if (!legendDetails) {
            return {
                notFound: true,
            };
        }
        return {
            props: { legendDetails },
        };
    } catch (error) {
        console.error("Erro ao buscar dados da lenda", error);
        return {
            notFound: true,
        };
    }
}
