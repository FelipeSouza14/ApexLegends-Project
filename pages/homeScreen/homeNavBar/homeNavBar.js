import Link from "next/link";
import styles from "./homeNavBar.module.css";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useAuth } from "../../../context/authContext";
import { useRouter } from 'next/router';
import { useState } from "react";
import { ProfileDiv } from "./profileDiv";
import { getValidEmail } from "../../login";


export function HomeNavBar() {
    const { isLoggedIn } = useAuth();
    const [open, setOpen] = useState('');
    const router = useRouter();

    const logged = () => {
        if (isLoggedIn) {
            setOpen(true)
        }
        else {
            console.log(isLoggedIn)
            router.push('/login');
        }
    }

    return (
        <nav className={styles.navBar}>
            <img className={styles.logoImagem} src={"/assets/logos/logo-sem-fundo.png"} />
            <div className={styles.profileButton} onClick={() => logged()}>
                <IoPersonCircleOutline size={45} />
                {open && <ProfileDiv />}
            </div>
        </nav>
    )
}