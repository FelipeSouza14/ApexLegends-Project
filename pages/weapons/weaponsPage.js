import styles from "./weaponsPage.module.css";

export default function WeaponsPage (){
    return(
        <div className={styles.containerWeapons}>
            <div className={styles.backDiv}>
                <div className={styles.frontDiv}>
                    <img src={"/assets/armas/icone-armas/assalto-imagem.png"} className={styles.weaponsClassImage}/>
                    <p className={styles.nomes}>Nome</p>
                </div>
            </div>
            <div className={styles.backDiv}>
                <div className={styles.frontDiv}>
                    <img src={"/assets/armas/icone-armas/smg-imagem.png"} className={styles.weaponsClassImage}/>
                    <p className={styles.nomes}>Nome</p>
                </div>
            </div>
            <div className={styles.backDiv}>
                <div className={styles.frontDiv}>
                    <img src={"/assets/armas/icone-armas/lmg-imagem.png"} className={styles.weaponsClassImageTwo}/>
                    <p className={styles.nomes}>Nome</p>
                </div>
            </div>
            <div className={styles.backDiv}>
                <div className={styles.frontDiv}>
                    <img src={"/assets/armas/icone-armas/atirador-imagem.png"} className={styles.weaponsClassImageTwo}/>
                    <p className={styles.nomes}>Nome</p>
                </div>
            </div>
            <div className={styles.backDiv}>
                <div className={styles.frontDiv}>
                    <img src={"/assets/armas/icone-armas/snipers-imagem.png"} className={styles.weaponsClassImageTwo}/>
                    <p className={styles.nomes}>Nome</p>
                </div>
            </div>
            <div className={styles.backDiv}>
                <div className={styles.frontDiv}>
                    <img src={"/assets/armas/icone-armas/escopetas-imagem.png"} className={styles.weaponsClassImageTwo}/>
                    <p className={styles.nomes}>Nome</p>
                </div>
            </div>
            <div className={styles.backDiv}>
                <div className={styles.frontDiv}>
                    <img src={"/assets/armas/icone-armas/pistolas-imagem.png"} className={styles.weaponsClassImageThree}/>
                    <p className={styles.nomes}>Nome</p>
                </div>
            </div>
        </div>
    )
}