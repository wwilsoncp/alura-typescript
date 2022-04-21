import { View } from "./view.js";
export class NegociacoesView extends View {
    template(negociacoes) {
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
            .map((negociacao) => {
            return this.getTrFormat(negociacao);
        })
            .join("")}
        </tbody>
      </table>
    `;
    }
    getTrFormat(negociacao) {
        return `<tr>
              <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
              <td>${negociacao.quantidade}</td>
              <td>${negociacao.valor}</td>
            </tr>`;
    }
}
