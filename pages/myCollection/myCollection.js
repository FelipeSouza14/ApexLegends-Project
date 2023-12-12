import MyNavBar from "./myNavBar/myNavBar";
import styles from "./myCollection.module.css";
import MyLoadLegendsData from "./myloadDatas/myLoadDatas";
import { useState } from "react";
import { auth } from "../../util/firebase";

export default function MyCollection() {
    const [openFavLegends, setOpenFavLegends] = useState(false);

    const handleLendasButtonClick = (isOpen) => {
        setOpenFavLegends(isOpen);
    };

    return(
        <div className={styles.myCollection}>
            <MyNavBar stateAuth={auth.currentUser} func={handleLendasButtonClick}/>
            {openFavLegends && <MyLoadLegendsData />}
        </div>
    );
}