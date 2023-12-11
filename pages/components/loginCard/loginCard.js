import styles from "./loginCard.module.css";

export default function LoginCard({ children }) {
    return (
        <div className={styles.card}>
            <img
                className={styles.logoImage}
                src={"/assets/logos/logo-sem-fundo.png"}
            />
            {children}
        </div>
    );
}
