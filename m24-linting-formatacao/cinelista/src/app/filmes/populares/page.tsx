import Grid from "@/components/Grid";
import Title from "@/components/Title"
import { getPopular } from "@/lib/api/tmdb";

export const revalidate = 60; // atualiza a cada 60s
/* 
    Incremental Static Regeneration (ISR).

    A página é gerada estaticamente e armazenada em cache.
    Durante 60 segundos o Next.js serve a versão em cache.
    Após esse período, uma nova versão pode ser gerada em segundo plano
    quando houver uma nova requisição.
*/

const FilmesPopulares = async () => {
    const filmes = await getPopular();

    return (
        <>
            <Title title="Filmes Populares" />
            <Grid filmes={filmes}/>
        </>
    );
}
export default FilmesPopulares;