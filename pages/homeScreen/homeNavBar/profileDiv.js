import styles from "./profileDiv.module.css";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";

export function ProfileDiv ({ onClose }) {
    return (
        <div className={styles.profileDiv}>
            <IoPersonCircleOutline size={45} className={styles.profileIcon}/>
            <p className={styles.paragraph}>MINHA COLEÇÃO</p>
            <p className={styles.paragraph}>SAIR</p>
            <button onClick={onClose} className={styles.closeButton}>
                <IoIosCloseCircle size={25}/>
            </button>
        </div>
    );
}