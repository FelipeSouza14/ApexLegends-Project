import { useState } from "react";
import styles from "./myLoadDatas.module.css";
import { db, auth } from "../../../util/firebase";
import { deleteDoc, doc, getDocs, collection, query, where } from "firebase/firestore";
import { MdDelete } from "react-icons/md";


export default function MyLoadLegendsData() {
    const [myLegendsData, setMyLegendsData] = useState([]);
    let hasUser = true;

    try {
        const loadData = async () => {
            if (auth.currentUser) {
                let newData = []
                const legendsCollection = collection(db, "lendasFav")
                const legendsQuery = query(legendsCollection, where('email', '==', auth.currentUser.email))
                const querySnapshot = await getDocs(legendsQuery);

                querySnapshot.forEach((doc) => {

                    let docData = doc.data();
                    newData.push({ image: docData.image, name: docData.name, docId: doc.id });
                })
                setMyLegendsData(newData)

            }
            else {
                hasUser = false
            }
        }
        if (myLegendsData.length == 0) {
            loadData()
        }
    } catch (error) {
        console.log("nao foi possivel continuar")
    }

    const deleteFav = async (props) => {
        const { id } = props

        try {
            if (auth.currentUser) {
                console.log('entrou no delete')
                console.log(id);

                await deleteDoc(doc(db, "lendasFav", id));
                setMyLegendsData(myLegendsData.filter((i) => i.docId !== id))
            }
            else {
                console.log("usuario nao encontrado")
            }
        } catch (error) {
            console.log("nao foi possivel continuar")
        }
    }
    return (
        <div className={styles.divLegends}>
            {
                myLegendsData.map((legend, index) => (
                    <figure className={styles.figureContainer} key={index}>
                        <img
                            src={legend.image}
                            width={350}
                            alt={`Imagem de ${legend.nome}`}
                        />
                        <figcaption>{legend.name} <MdDelete onClick={() => deleteFav({ id: legend.docId })} /></figcaption>
                    </figure>
                ))}
        </div>
    );
}