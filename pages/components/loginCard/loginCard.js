import styles from "./loginCard.module.css"

export default function LoginCard({ title, children }){
    return (
        <div className={styles.card}>
                    <img className={styles.logoImagem} src={"/assets/logos/logo-sem-fundo.png"} />

            <h4 className={styles.title}>{title}</h4>
             {children}
        </div>
    
    )
}