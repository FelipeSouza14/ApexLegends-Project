import { useState } from "react";
import styles from "./myLoadMaps.module.css";
import { db, auth } from "../../../util/firebase";
import { deleteDoc, doc, getDocs, collection, query, where } from "firebase/firestore";
import { MdDelete } from "react-icons/md";

export default function MyLoadMapsData() {
    const [myMapsData, setMyMapsData] = useState([]);
    let hasUser = true;

    try {
        const loadData = async () => {
            if (auth.currentUser) {
                let newData = [];
                const legendsCollection = collection(db, "mapasFav");
                const legendsQuery = query(
                    legendsCollection,
                    where("email", "==", auth.currentUser.email)
                );
                const querySnapshot = await getDocs(legendsQuery);

                querySnapshot.forEach((doc) => {
                    let docData = doc.data();
                    newData.push({
                        image: docData.image,
                        name: docData.name,
                        docId: doc.id,
                    });
                });
                setMyMapsData(newData);
            } else {
                hasUser = false;
            }
        };
        if (myMapsData.length == 0) {
            loadData();
        }
    } catch (error) {
        alert("Não foi possível continuar");
        console.log("Não foi possível continuar");
    }

    const deleteFav = async (props) => {
        const { id } = props;

        try {
            if (auth.currentUser) {
                // console.log("entrou no delete");
                // console.log(id);

                await deleteDoc(doc(db, "mapasFav", id));
                setMyMapsData(myMapsData.filter((i) => i.docId !== id));
            } else {
                alert("Usuário não encontrado!");
                console.log("Usuário não encontrado");
            }
        } catch (error) {
            alert("Não foi possível continuar");
            console.log("Não foi possível continuar");
        }
    };

    return (
        <div className={styles.divMaps}>
            {myMapsData.map((map, index) => (
                <div key={index} className={styles.mapsData}>
                    <div className={styles.headDiv}>
                        <p className={styles.mapsName}>{map.name}</p>
                        <div className={styles.deleteButton}>
                            <MdDelete
                                size={30}
                                onClick={() => deleteFav({ id: map.docId })}
                            />
                        </div>
                    </div>
                    <img
                        className={styles.mapsImage}
                        src={map.image}
                        alt={`Imagem de ${map.name}`}
                    />
                </div>
            ))}
        </div>
    );
}
