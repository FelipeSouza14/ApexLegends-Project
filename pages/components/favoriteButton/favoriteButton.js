import { MdFavoriteBorder } from "react-icons/md";

import styles from "./favoriteButton.module.css";

export function FavoriteButton({ size }) {
    return (
        <div>
            <button type="submit" className={styles.favoriteButton}>
                <MdFavoriteBorder size={size} />
            </button>
        </div>
    );
}
