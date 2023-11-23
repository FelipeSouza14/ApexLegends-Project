import styles from "./registerCard.module.css";

export default function RegisterCard({ title, children }) {
    return (
        <div className={styles.card}>
            <p className={styles.title}>{title}</p>
            {children}
        </div>
    );
}
