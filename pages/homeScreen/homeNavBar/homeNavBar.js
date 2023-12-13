import styles from "./homeNavBar.module.css";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useRouter } from "next/router";

export default function HomeNavBar({ isLoggedIn, onProfileButtonClick }) {
    const router = useRouter();

    const logged = () => {
        if (isLoggedIn) {
            onProfileButtonClick(true);
        } else {
            router.push("/login");
        }
    };

    return (
        <nav className={styles.navBar}>
            <img
                className={styles.logoImagem}
                src={"/assets/logos/logo-sem-fundo.png"}
            />
            <div className={styles.profileButton} onClick={() => logged()}>
                <IoPersonCircleOutline size={45} />
            </div>
        </nav>
    );
}
