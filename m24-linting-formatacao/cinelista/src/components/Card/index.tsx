import { Filme } from "@/types/types";
import styles from "./Card.module.css";
import Link from "next/link";

type Props = {
    filme: Filme
}

const Card = ({filme} : Props) => {
    const {id, title, poster_path, overview, vote_average} = filme /* Desestruturação para não precisar usar filme.algo */

    const resume = overview?.length >= 256 ? `${overview?.substring(0,253)}...` : overview;

    return (
        <div key={id} className={styles.card}>
            <Link href={`/filmes/${id}`}>
                <img
                    className={styles.poster} 
                    src={`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path}`} 
                    alt={`Imagem do filme ${title}`} 
                    width={300} 
                    height={200}
                />

                <div className={styles.info}>
                    <h3 className={styles.title}>{title}</h3> 
                    <p className={styles.description}>{resume}</p>
                    <p className={styles.description}>Nota: {vote_average}</p>
                </div>
            </Link>
        </div>
    );
}

export default Card;