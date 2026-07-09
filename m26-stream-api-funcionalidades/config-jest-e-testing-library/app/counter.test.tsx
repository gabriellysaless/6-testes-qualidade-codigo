/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./counter";

it("App Router: Works with Client Components (React State)", () => {
//descrição do comportamento esperado
  render(<Counter />);
//renderizar o componente
  expect(screen.getByRole("heading")).toHaveTextContent("0");
  fireEvent.click(screen.getByRole("button"));
  expect(screen.getByRole("heading")).toHaveTextContent("1");
//validar o que é esperado com base no que foi gerado
});
