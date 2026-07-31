import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import Title from "./index";

test("Renderiza o título com o texto correto", async () => { //Descrição

    const titulo = "Título"; 

    render(<Title title={titulo}/>); //Renderiza

    const elemento = await screen.findByText(titulo); //Espero encontrar o texto Título

    expect(elemento).toBeInTheDocument(); //Espero que o elemento esteja dentro do documento

})