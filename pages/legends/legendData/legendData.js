import { FavoriteButton } from "../../components/favoriteButton/favoriteButton";

import styles from "./legendData.module.css";

//Precisará receber um parâmetro para saber qual lenda foi clicada
export default function LegendData() {
    return (
        <div className={styles.containerPage}>
            <div className={styles.divDataBackground}>
                <img src="/assets/lendas/ash-image.png" width={420}/>
                <div className={styles.containerData}>
                    <div className={styles.containerTitles}>
                        <div>
                            <p className={styles.name}>Ash</p>
                            <p className={styles.title}>Instigadora Incisiva</p>
                        </div>
                        <FavoriteButton size={35}/>
                    </div>

                    <div className={styles.legendInfo}>
                        <p>
                            Nome real <br /> Idade <br /> Planeta-natal <br />
                            Classe
                        </p>
                        <p className={styles.legendInfoData}>
                            Dra. Ashleigh Reid <br /> 122 <br /> Desconhecido <br />
                            Assalto
                        </p>
                    </div>

                    <div className={styles.containerAbilities}>
                        <figure>
                            <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/ash/apex-grid-tile-legends-abilities-tactical-ash.png.adapt.crop16x9.652w.png" />
                            <figcaption className={styles.abilityType}>
                                HABILIDADE TÁTICA
                            </figcaption>
                            <figcaption>Armadilha Voltaica</figcaption>
                        </figure>
                        <figure>
                            <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/ash/apex-grid-tile-legends-abilities-passive-ash.png.adapt.crop16x9.652w.png" />
                            <figcaption className={styles.abilityType}>
                                HABILIDADE PASSIVA
                            </figcaption>
                            <figcaption>Marca da Morte</figcaption>
                        </figure>
                        <figure>
                            <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/ash/apex-grid-tile-legends-abilities-ultimate-ash.png.adapt.crop16x9.652w.png" />
                            <figcaption className={styles.abilityType}>
                                HABILIDADE SUPREMA
                            </figcaption>
                            <figcaption>Invasão Dimensional</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
}
