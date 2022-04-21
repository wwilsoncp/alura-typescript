import { DiasDaSemana } from "../enums/dias-da-semana.js";

export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get data(): Date {
    // retornar uma cópia da data, para não mudar a data original da classe
    // sem isso permitiria "negociacao.data.setDate(1)", e o typescript deixaria, pois o readonly bloqueia apenas na atribuição
    return new Date(this._data.getTime());
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }

  public ehDiaUtil(): boolean {
    return (
      this.data.getDay() > DiasDaSemana.DOMINGO &&
      this.data.getDay() < DiasDaSemana.SABADO
    );
  }

  public static criarDe(
    dataString: string,
    quantidadeString: string,
    valorString: string
  ): Negociacao {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ","));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(date, quantidade, valor);
  }

  // constructor(
  //   private _data: Date,
  //   private _quantidade: number,
  //   private _valor: number
  // ) {}

  // constructor(
  //   private _data: Date,
  //   private _quantidade: number,
  //   private _valor: number
  // ) {}

  // get data(): Date {
  //   return this._data;
  // }

  // get quantidade(): number {
  //   return this._quantidade;
  // }

  // get valor(): number {
  //   return this._valor;
  // }

  // get volume(): number {
  //   return this._quantidade * this._valor;
  // }
}
