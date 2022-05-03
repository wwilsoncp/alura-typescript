import { Negociacao } from "../models/negociacao.js";
export class NegociacoesService {
    obterNegociacoes() {
        return fetch("http://localhost:8080/dados")
            .then((res) => res.json())
            .then((dados) => {
            return dados.map((dado) => {
                return new Negociacao(new Date(), dado.vezes, dado.montante);
            });
        })
            .catch((error) => {
            console.error(`Erro ao consumir a API: ${error}`);
            throw new Error(`Erro ao consumir a API: ${error}`);
        });
    }
}
//# sourceMappingURL=negociacoes-service.js.map