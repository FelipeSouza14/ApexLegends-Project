import { useState } from "react";
import styles from "./myLoadWeapons.module.css";
import { db, auth } from "../../../util/firebase";
import { deleteDoc, doc, getDocs, collection, query, where } from "firebase/firestore";
import { MdDelete } from "react-icons/md";


export default function MyLoadWeaponsData() {
    const [myWeaponsData, setMyWeaponsData] = useState([]);
    let hasUser = true;
    
    try {
        const loadData = async () => {
            if (auth.currentUser) {
                let newData = []
                const legendsCollection = collection(db, "armasFav")
                const legendsQuery = query(legendsCollection, where('email', '==', auth.currentUser.email))
                const querySnapshot = await getDocs(legendsQuery);

                querySnapshot.forEach((doc) => {
                    
                    let docData = doc.data();
                    newData.push({ image: docData.image, name: docData.name, docId: doc.id });
                })
                setMyWeaponsData(newData)

            }
            else {
                hasUser = false
            }
        }
        if (myWeaponsData.length == 0) {
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

                await deleteDoc(doc(db, "armasFav", id));
                setMyWeaponsData(myWeaponsData.filter((i) => i.docId !== id))
            }
            else {
                console.log("usuario nao encontrado")
            }
        } catch (error) {
            console.log("nao foi possivel continuar")
        }
    }

    return (
        <div className={styles.divWeapons}>
            {
                myWeaponsData.map((weapons, index) => (
                    <div className={styles.backDiv} key={index}>
                        <div className={styles.frontDiv}>
                            <img
                                src={weapons.image}
                                className={styles.imageStyle}
                            />
                            <div className={styles.divFavoriteButton}>
                                <p className={styles.nomes}>{weapons.name}</p>
                                <div className={styles.deleteButton}>
                                    <MdDelete size={30} onClick={() => deleteFav({ id: weapons.docId })} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
}