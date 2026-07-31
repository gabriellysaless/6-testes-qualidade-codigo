//Extensão do Jest DOM: adiciona matchers como "toBeInTheDocument"
import "@testing-library/jest-dom"
import { getTrendingMovies } from "./../lib/api/tmdb";
import { render, screen } from "@testing-library/react";
import Home from "./page";

// Mock configurado para retornar array vazio
jest.mock("./../lib/api/tmdb", () => ({
    getTrendingMovies: jest.fn(() => Promise.resolve([])),
}));

test("Exibe o título 'Filmes em Destaque' na página inicial corretamente", async () => {
    const titulo = "Filmes em Destaque";

    render(await Home());

    expect(screen.getByText(titulo)).toBeInTheDocument();
})

test("Renderiza os filmes em destaque corretamente", async () => {
    (getTrendingMovies as jest.Mock).mockResolvedValue([
        {
            id:1,
            title: "Filme teste",
            overview: "Resumo teste",
            poster_path: "public/next.svg",
            vote_average: 8.0,
        },
    ]);
    // Renderiza a página (internamente chama a função getTrendingMovies)
    render(await Home());
    // Verifica se o título renderizado aparece na tela
    expect(await screen.findByText("Filme teste")).toBeInTheDocument();
});

test("Exibir uma mensagem quando não houver filmes disponíveis", async () => {
    (getTrendingMovies as jest.Mock).mockResolvedValue([]);

    render(await Home());

    expect(await screen.findByText("Nenhum filme encontrado.")).toBeInTheDocument();
});
