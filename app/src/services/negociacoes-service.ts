import { NegociacaoImportacao } from "../interfaces/negociacao-importacao.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
  public obterNegociacoes(): Promise<Negociacao[]> {
    return fetch("http://localhost:8080/dados")
      .then((res) => res.json())
      .then((dados: NegociacaoImportacao[]) => {
        return dados.map((dado: NegociacaoImportacao) => {
          return new Negociacao(new Date(), dado.vezes, dado.montante);
        });
      })
      .catch((error: Error) => {
        console.error(`Erro ao consumir a API: ${error}`);
        throw new Error(`Erro ao consumir a API: ${error}`);
      });
  }
}
