import styles from "./weaponsPage.module.css";

export default function WeaponsPage (){
    return(
        <div className={styles.containerWeapons}>
            <div className={styles.backDiv}>
                <div className={styles.frontDiv}>
                    <img src={"/assets/armas/WEAPONS-ICONS/assalto-imagem.png"} className={styles.weaponsClassImage}/>
                    <p className={styles.nomes}>Nome</p>
                </div>
            </div>
            <div className={styles.backDiv}>
                <div className={styles.frontDiv}>
                    <img src={"/assets/armas/WEAPONS-ICONS/smg-imagem.png"} className={styles.weaponsClassImage}/>
                    <p className={styles.nomes}>Nome</p>
                </div>
            </div>
            <div className={styles.backDiv}>
                <div className={styles.frontDiv}>
                    <img src={"/assets/armas/WEAPONS-ICONS/lmg-imagem.png"} className={styles.weaponsClassImageTwo}/>
                    <p className={styles.nomes}>Nome</p>
                </div>
            </div>
            <div className={styles.backDiv}>
                <div className={styles.frontDiv}>
                    <img src={"/assets/armas/WEAPONS-ICONS/atirador-imagem.png"} className={styles.weaponsClassImageTwo}/>
                    <p className={styles.nomes}>Nome</p>
                </div>
            </div>
            <div className={styles.backDiv}>
                <div className={styles.frontDiv}>
                    <img src={"/assets/armas/WEAPONS-ICONS/snipers-imagem.png"} className={styles.weaponsClassImageTwo}/>
                    <p className={styles.nomes}>Nome</p>
                </div>
            </div>
            <div className={styles.backDiv}>
                <div className={styles.frontDiv}>
                    <img src={"/assets/armas/WEAPONS-ICONS/escopetas-imagem.png"} className={styles.weaponsClassImageTwo}/>
                    <p className={styles.nomes}>Nome</p>
                </div>
            </div>
            <div className={styles.backDiv}>
                <div className={styles.frontDiv}>
                    <img src={"/assets/armas/WEAPONS-ICONS/pistolas-imagem.png"} className={styles.weaponsClassImageThree}/>
                    <p className={styles.nomes}>Nome</p>
                </div>
            </div>
        </div>
    )
}