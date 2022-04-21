import { DiasDaSemana } from "../enums/dias-da-semana.js";
export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        return new Date(this._data.getTime());
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    ehDiaUtil() {
        return (this.data.getDay() > DiasDaSemana.DOMINGO &&
            this.data.getDay() < DiasDaSemana.SABADO);
    }
    static criarDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}
