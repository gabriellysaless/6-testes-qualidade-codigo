/* Coloquei dentro de uma interface só os dados que quero da minha API */

export interface Filme {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    vote_average: number;
    release_date: string;
}