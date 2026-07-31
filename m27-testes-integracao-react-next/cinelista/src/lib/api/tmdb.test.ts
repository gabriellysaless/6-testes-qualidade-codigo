import tmdbApi from "./axios";
import { getTrendingMovies } from "./tmdb"

jest.mock("./axios");
test("Retorna filmes em destaque corretamente", async () => {
    // Padrão de teste: AAA

    // Arrange
    const mockResults = [{id: 1, title: "Matrix"}];
    (tmdbApi.get as jest.Mock).mockResolvedValue({data: { results: mockResults}}); //A chamada para API será mockada e o resultado esperado é o mockResults que criamos para simular

    // Act
    const filmes = await getTrendingMovies();

    // Assert
    expect(filmes).toEqual(mockResults); //Espero que filmes que é o resultado da chamada da API seja igual ao mockResults
})