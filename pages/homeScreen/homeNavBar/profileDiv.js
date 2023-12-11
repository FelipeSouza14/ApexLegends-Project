import styles from "./profileDiv.module.css";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { useAuth } from "../../../context/authContext";

export function ProfileDiv ({ onClose }) {
    const { logOut } = useAuth();

    return (
        <div className={styles.profileDiv}>
            <IoPersonCircleOutline size={45} className={styles.profileIcon}/>
            <p className={styles.paragraph}>MINHA COLEÇÃO</p>
            <button className={styles.paragraph} onClick={logOut}>SAIR</button>
            <button onClick={onClose} className={styles.closeButton}>
                <IoIosCloseCircle size={25}/>
            </button>
        </div>
    );
}