import { renderHook } from "@testing-library/react";
import { useResumoFilmes } from "./useResumoFilmes";

test("Retorna overview inteiro se menor que o limite", () => {
    const texto = "Resumo curto";

    const {result} = renderHook(() => useResumoFilmes(texto, 256));
    expect(result.current).toBe(texto);
});

test("Retorna overview cortado e reticências se passar do limite", () => {
    const textoGrande = "Resumo mais completo do texto."
    
    const {result} = renderHook(() => useResumoFilmes(textoGrande, 10));
    expect(result.current).toBe("Resumo mai...");
});