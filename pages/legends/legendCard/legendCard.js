import Link from "next/link";

import styles from "./legendCard.module.css";

export function CardLegend() {
    return (
        <div className={styles.cardsContainer}>
            <Link href="/legends/legendData/legendData" className={styles.linkLegendData}>
                <figure className={styles.figureContainer}>
                    <img
                        src={"/assets/lendas/ash-image.png"}
                        width={350}
                        alt="ash"
                    />
                    <figcaption>Ash</figcaption>
                </figure>
            </Link>

            <Link href="/legends/legendData/legendData" className={styles.linkLegendData}>
                <figure className={styles.figureContainer}>
                    <img
                        src="/assets/lendas/ballistic-image.png"
                        width={350}
                        alt="ballistic"
                    />
                    <figcaption>Ballistic</figcaption>
                </figure>
            </Link>

            <Link href="/legends/legendData/legendData" className={styles.linkLegendData}>
                <figure className={styles.figureContainer}>
                    <img
                        src="/assets/lendas/bangalore-image.png"
                        width={350}
                        alt="bangalore"
                    />
                    <figcaption>Bangalore</figcaption>
                </figure>
            </Link>

            <Link href="/legends/legendData/legendData" className={styles.linkLegendData}>
                <figure className={styles.figureContainer}>
                    <img
                        src="/assets/lendas/fuse-image.png"
                        width={350}
                        alt="fuse"
                    />
                    <figcaption>Fuse</figcaption>
                </figure>
            </Link>
        </div>
    );
}
