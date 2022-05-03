import { DiasDaSemana } from "../enums/dias-da-semana.js";
export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    static criarDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
    get data() {
        return new Date(this._data.getTime());
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    toText() {
        return `Data: ${this.data}
    Quantidade: ${this.quantidade}
    Valor: ${this.valor}`;
    }
    ehDiaUtil() {
        return (this.data.getDay() > DiasDaSemana.DOMINGO &&
            this.data.getDay() < DiasDaSemana.SABADO);
    }
    ehIgual(negociacao) {
        return (this.data.getDate() === negociacao.data.getDate() &&
            this.data.getMonth() === negociacao.data.getMonth() &&
            this.data.getDay() === negociacao.data.getDay());
    }
}
//# sourceMappingURL=negociacao.js.map