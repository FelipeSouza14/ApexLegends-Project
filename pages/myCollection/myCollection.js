import MyNavBar from "./myNavBar/myNavBar";
import styles from "./myCollection.module.css";
import MyLoadLegendsData from "./myLoadDatas/myLoadLegends";
import { useState } from "react";
import { auth } from "../../util/firebase";
import MyLoadWeaponsData from "./myLoadDatas/myLoadWeapons";
import MyLoadMapsData from "./myLoadDatas/myLoadMaps";
import { GoAlertFill } from "react-icons/go";

export default function MyCollection() {
    const [presentPage, setPresentPage] = useState(0);

    const setPage = () => {
        if (presentPage === 0) {
            return (
                <h1 className={styles.placeholder}>
                    Escolha a coleção que deseja ver
                    <GoAlertFill />
                </h1>
            );
        } else if (presentPage === 1) {
            return <MyLoadLegendsData />;
        } else if (presentPage === 2) {
            return <MyLoadWeaponsData />;
        } else if (presentPage === 3) {
            return <MyLoadMapsData />;
        }
    };

    return (
        <div className={styles.myCollection}>
            <MyNavBar stateAuth={auth.currentUser} statePage={setPresentPage} />
            <div className={styles.container}>
                <div className={styles.containerPage}>{setPage()}</div>
            </div>
        </div>
    );
}
