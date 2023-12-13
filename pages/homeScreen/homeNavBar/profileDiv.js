import styles from "./profileDiv.module.css";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import { useAuth } from "../../../context/authContext";
import Link from "next/link";

export default function ProfileDiv({ onClose }) {
    const { logOut } = useAuth();

    return (
        <div className={styles.profileDiv}>
            <IoPersonCircleOutline size={45} className={styles.profileIcon} />
            <Link href={`/myCollection/myCollection`}>
                <button className={styles.collectionButton}>MINHA COLEÇÃO</button>
            </Link>
            <button className={styles.logOutButton} onClick={logOut}>
                SAIR
                <IoExitOutline size={30} />
            </button>
            <button onClick={onClose} className={styles.closeButton}>
                <IoIosCloseCircle size={25} />
            </button>
        </div>
    );
}
