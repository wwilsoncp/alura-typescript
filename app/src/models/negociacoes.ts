import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes> {
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

  public toText(): string {
    // imprimindo a lista de uma forma mais organizada
    return JSON.stringify(this.negociacoes, null, 2);
  }

  public ehIgual(negociacoes: Negociacoes): boolean {
    return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes);
  }
}
