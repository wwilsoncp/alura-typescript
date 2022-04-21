import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  // private negociacoes: Array<Negociacao> = [];
  private negociacoes: Negociacao[] = [];

  public adicionar(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  // listar(): ReadonlyArray<Negociacao> {
  //   return this.negociacoes;
  // }

  public listar(): readonly Negociacao[] {
    return this.negociacoes;
  }
}
