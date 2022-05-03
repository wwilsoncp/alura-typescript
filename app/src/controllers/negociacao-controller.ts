import { domInjector } from "../decorators/dom-injector.js";
import { inspectMethod } from "../decorators/inspect.js";
import { logTimeExecution } from "../decorators/logar-tempo-execucao.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  @domInjector("#data")
  private inputData: HTMLInputElement;
  @domInjector("#quantidade")
  private inputQuantidade: HTMLInputElement;
  @domInjector("#valor")
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView("#negociacoesView");
  private mensagemView = new MensagemView("#mensagemView");
  private negociacoesService = new NegociacoesService();

  constructor() {
    // this.inputData = document.querySelector("#data") as HTMLInputElement;
    // this.inputQuantidade = document.querySelector(
    //   "#quantidade"
    // ) as HTMLInputElement;
    // this.inputValor = document.querySelector("#valor") as HTMLInputElement;
    this.negociacoesView.update(this.negociacoes);
  }

  @inspectMethod()
  @logTimeExecution()
  public adiciona(): void {
    const negociacao = Negociacao.criarDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );
    if (!negociacao.ehDiaUtil()) {
      this.mensagemView.updateError(
        "Apenas negociações em dias úteis são aceitas."
      );
      return;
    }
    this.negociacoes.adicionar(negociacao);
    this.limparFormulario();
    this.updateView();
  }

  public importarDados(): void {
    this.negociacoesService
      .obterNegociacoes()
      .then((negociacoes: Negociacao[]) => {
        for (let negociacao of negociacoes) {
          this.negociacoes.adicionar(negociacao);
        }
        this.negociacoesView.update(this.negociacoes);
      })
      .catch((error: Error) => {
        this.mensagemView.updateError(error?.message);
      });

    console.log("oi");
  }

  private limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }

  private updateView(): void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.updateSuccess("Negociação adicionada com sucesso.");
  }
}
