import Grid from "@/components/Grid";
import Title from "@/components/Title"
import { getTopRated } from "@/lib/api/tmdb";

export const dynamic = 'force-static';
/* 
    Força a renderização estática.
    A página é gerada durante o build.
    Depois disso, o conteúdo só será atualizado em um novo build.
    Ideal para conteúdos que raramente mudam.
*/

const TopFilmes = async () => {
    const filmes = await getTopRated();

    return (
        <>
            <Title title="Top Filmes" />
            <Grid filmes={filmes}/>
        </>
    );
}
export default TopFilmes;