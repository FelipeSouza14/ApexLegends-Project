import { getWeaponsData } from "../../../api/weapons";
import { FavoriteButton } from "../../components/favoriteButton/favoriteButton";
import { useRouter } from "next/router";
import styles from "./weaponsCategory.module.css";
import { db, auth } from "../../../util/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

export default function WeaponsCategory({ weaponsDetails }) {
    const router = useRouter();

    if (router.isFallback) return <div>Carregando...</div>;

    return (
        <div className={styles.containerWeapons}>
            {weaponsDetails.map((weapons, index) => {
                return (
                    <div className={styles.backDiv} key={index}>
                        <div className={styles.frontDiv}>
                            <img
                                src={weapons.imagem}
                                className={styles.imageStyle}
                            />
                            <div className={styles.divFavoriteButton}>
                                <p className={styles.nomes}>{weapons.nome}</p>
                                <div
                                    onClick={() =>
                                        addFavorite({
                                            collectionName: "armasFav",
                                            id: weapons.id,
                                            name: weapons.nome,
                                            img: weapons.imagem,
                                        })
                                    }
                                >
                                    <FavoriteButton size={30} />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export const addFavorite = async (props) => {
    const { id, img, name, collectionName } = props;

    try {
        if (auth.currentUser) {
            let getId = id;
            let existsId = false;

            const querySnapshot = await getDocs(collection(db, collectionName));

            try {
                querySnapshot.forEach((doc) => {
                    if (doc.data().id === getId) {
                        existsId = true;
                        throw new Error("StopIteration");
                    }
                });
            } catch (e) {
                if (e.message !== "StopIteration") {
                    throw e;
                }
            }

            if (existsId === false) {
                await addDoc(collection(db, collectionName), {
                    email: auth.currentUser.email,
                    id: getId,
                    name: name,
                    image: img,
                });
            } else {
                alert("O item já foi favoritado!");
            }
        } else {
            alert("Usuário inexistente ou não conectado!");
        }
    } catch (error) {
        alert("Erro. Não foi possivel continuar!");
    }
};

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
