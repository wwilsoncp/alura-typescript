import { View } from "./view.js";

enum MessageType {
  INFO = "info",
  SUCCESS = "success",
  DANGER = "danger",
  WARNING = "warning",
}

export interface Mensagem {
  tipo: MessageType;
  texto: string;
}

export class MensagemView extends View<Mensagem> {
  protected template(model: Mensagem): string {
    return `
      <p class="alert alert-${model.tipo}">${model.texto}</p>
    `;
  }

  public updateError(message: string): void {
    this.updateMessage(MessageType.DANGER, message);
  }

  public updateSuccess(message: string): void {
    this.updateMessage(MessageType.SUCCESS, message);
  }

  private updateMessage(type: MessageType, message: string): void {
    const mensagem: Mensagem = {
      tipo: type,
      texto: message,
    };
    this.update(mensagem);
  }
}
