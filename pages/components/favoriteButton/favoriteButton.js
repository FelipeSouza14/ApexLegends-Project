import { useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import styles from "./favoriteButton.module.css";

export function FavoriteButton({ size }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleButtonClick = () => {
        setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    };

    return (
        <div className={styles.favoriteButton} onClick={handleButtonClick}>
            {isFavorite ? (
                <MdFavorite size={size} />
            ) : (
                <MdFavoriteBorder size={size} />
            )}
        </div>
    );
}
