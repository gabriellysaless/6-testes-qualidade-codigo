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