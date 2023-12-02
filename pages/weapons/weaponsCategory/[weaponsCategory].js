import { getWeaponsData } from "../../../api/weapons";
import { FavoriteButton } from "../../components/favoriteButton/favoriteButton";
import { useRouter } from "next/router";
import styles from "./weaponsCategory.module.css";

export default function WeaponsCategory({ weaponsDetails }) {
    const router = useRouter();

    if (router.isFallback) {
        // Pode exibir um indicador de carregamento enquanto os dados estão sendo buscados
        return <div>Carregando...</div>;
    }

    console.log(weaponsDetails);
    return (
        <div className={styles.containerWeapons}>
            {weaponsDetails.map((weapons, index) => {return(
                <div className={styles.backDiv} key={index}>
                    <div className={styles.frontDiv}>
                        <img src={weapons.imagem} className={styles.imageStyle}/>
                        <div className={styles.divFavoriteButton}>
                            <p className={styles.nomes}>{weapons.nome}</p>
                            <FavoriteButton size={30} />
                        </div>
                    </div>
                </div>
            )})}
        </div>
    );
}


export async function getServerSideProps(context) {
    const { weaponsCategory } = context.params; // Desestruturação do objeto

    try {
        // Chama a função getLegendsData para buscar todos os dados das lendas
        const weaponsData = await getWeaponsData();

        // Encontra os detalhes da lenda com base no nome fornecido na URL
        const weaponsDetails = weaponsData.filter(
            (weapons) => weapons.classe === weaponsCategory
        );

        //Verifica se a lenda foi encontrada. Se não, renderiza a página de erro 404.
        if (!weaponsDetails) {
            return {
                notFound: true,
            };
        }
        return {
            props: { weaponsDetails },
        };
    } catch (error) {
        console.error("Erro ao buscar dados da lenda", error);
        return {
            notFound: true,
        };
    }
}
