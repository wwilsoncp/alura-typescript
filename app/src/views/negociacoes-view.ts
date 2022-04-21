import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {
  protected template(negociacoes: Negociacoes): string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>Data</th>
            <th>Quantidade</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          ${negociacoes
            .listar()
            .map((negociacao: Negociacao) => {
              return this.getTrFormat(negociacao);
            })
            .join("")}
        </tbody>
      </table>
    `;
  }

  private getTrFormat(negociacao: Negociacao): string {
    return `<tr>
              <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
              <td>${negociacao.quantidade}</td>
              <td>${negociacao.valor}</td>
            </tr>`;
  }
}
