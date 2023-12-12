import MyNavBar from "./myNavBar/myNavBar";
import styles from "./myCollection.module.css";
import MyLoadLegendsData from "./myLoadDatas/myLoadLegends";
import { useState } from "react";
import { auth } from "../../util/firebase";
import MyLoadWeaponsData from "./myLoadDatas/myLoadWeapons";
import MyLoadMapsData from "./myLoadDatas/myLoadMaps";


export default function MyCollection() {
    // const [openFavLegends, setOpenFavLegends] = useState('');
    // const [openFavWeapons, setOpenFavWeapons] = useState('');
    const [paginaAtual, setPaginaAtual] = useState(0);

    // const handleLendasButtonClick = (showCollection) => {
    //     setOpenFavLegends(showCollection);
    // };

    // const handleWeaponsButtonClick = (showCollection) => {
    //     setOpenFavWeapons(showCollection);
    // };

    const decidir = () => {
        if (paginaAtual === 1) {
            return <MyLoadLegendsData />
        }
        else if (paginaAtual === 2) {
            return <MyLoadWeaponsData />
        }
        else if (paginaAtual === 3) {
            return <MyLoadMapsData />
        }
    }

    return (
        <div className={styles.myCollection}>
            <MyNavBar stateAuth={auth.currentUser} statePage={setPaginaAtual} />
            <div className={styles.container}>
                {decidir()}
            </div>
        </div>
    );
}