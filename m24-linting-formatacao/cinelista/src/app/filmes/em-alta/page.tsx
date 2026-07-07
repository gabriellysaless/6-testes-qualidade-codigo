import Grid from "@/components/Grid";
import Title from "@/components/Title"
import { getNowPlaying } from "@/lib/api/tmdb";

export const dynamic = 'force-dynamic';
/* 
    Força a renderização dinâmica.
    A página é gerada a cada requisição.
    Não utiliza o cache de página do Next.js.
    Equivale ao comportamento do antigo getServerSideProps do pages router.
*/


const FilmesEmAlta = async () => {
    const filmes = await getNowPlaying();
    return(
        <>
            <Title title="Filmes em Alta" />
            <Grid filmes={filmes}/>
        </>
    );
}

export default FilmesEmAlta;