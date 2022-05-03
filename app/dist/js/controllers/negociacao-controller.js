var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "../decorators/dom-injector.js";
import { inspectMethod } from "../decorators/inspect.js";
import { logTimeExecution } from "../decorators/logar-tempo-execucao.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoesView");
        this.mensagemView = new MensagemView("#mensagemView");
        this.negociacoesService = new NegociacoesService();
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criarDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!negociacao.ehDiaUtil()) {
            this.mensagemView.updateError("Apenas negociações em dias úteis são aceitas.");
            return;
        }
        this.negociacoes.adicionar(negociacao);
        this.limparFormulario();
        this.updateView();
    }
    importarDados() {
        this.negociacoesService
            .obterNegociacoes()
            .then((negociacoes) => {
            for (let negociacao of negociacoes) {
                this.negociacoes.adicionar(negociacao);
            }
            this.negociacoesView.update(this.negociacoes);
        })
            .catch((error) => {
            this.mensagemView.updateError(error === null || error === void 0 ? void 0 : error.message);
        });
        console.log("oi");
    }
    limparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
    updateView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.updateSuccess("Negociação adicionada com sucesso.");
    }
}
__decorate([
    domInjector("#data")
], NegociacaoController.prototype, "inputData", void 0);
__decorate([
    domInjector("#quantidade")
], NegociacaoController.prototype, "inputQuantidade", void 0);
__decorate([
    domInjector("#valor")
], NegociacaoController.prototype, "inputValor", void 0);
__decorate([
    inspectMethod(),
    logTimeExecution()
], NegociacaoController.prototype, "adiciona", null);
