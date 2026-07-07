import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./DetalheFilme.module.css";
import { getMovieDetails } from "@/lib/api/tmdb";
import { title } from "process";

type Props = {
    params: Promise<{
        id: number
    }>
}

/* Função disponibilizada pelo próprio Next.js */
export const generateMetadata = async ({params}: Props) => {
    const { id } = await params
    // Fazer chamada da API
    const details = await getMovieDetails(id)

    if(!details){
        notFound();
    }

    return {
        title: `${details.title} | Cinelista`,
        description: details.overview,
        /* openGraph: exibe título, descrição e imagem quando o link da nossa página é compartilhada */
        openGraph: {
            title: `${details.title} | Cinelista`,
            description: details.overview,
            images:[`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${details.poster_path}`]
        }
    }
}

const DetalheFilme = async ({params}: Props) => {
const { id } = await params
// Fazer chamada da API
const detalhe = await getMovieDetails(id)

if(!detalhe){
    notFound();
}

const { title, poster_path, overview } = detalhe

    return (
        <div className={styles.details}>
            <div className={styles.container}>
                <Link href="/" className={styles.voltar}>Voltar</Link>
                <section>
                    <figure>
                        <img className={styles.image} src={`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path}`} alt={`Poster do filme ${title}`} />
                    </figure>
                    <article className={styles.info}>
                    <h2>{title}</h2>
                    <p>{overview}</p>
                </article>
                </section>
            </div>
        </div>
    )
}

export default DetalheFilme