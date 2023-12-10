import styles from "./styles/index.module.css";
import { useAuth } from "../context/authContext";
import { HomeNavBar } from "./homeScreen/homeNavBar/homeNavBar";
import { HomeCards } from "./homeScreen/homeCards/homeCards";
import { useState } from "react";
import { ProfileDiv } from "./homeScreen/homeNavBar/profileDiv";

export default function Main() {
    const [open, setOpen] = useState(false);
    const { isLoggedIn } = useAuth();

    const handleProfileButtonClick = (isOpen) => {
        setOpen(isOpen);
    };

    return (
        <div className={styles.homePage}>
            {open && <ProfileDiv onClose={() => setOpen(false)}/>}
            <HomeNavBar isLoggedIn={isLoggedIn} onProfileButtonClick={handleProfileButtonClick} />
            <HomeCards />
        </div>
    );
}