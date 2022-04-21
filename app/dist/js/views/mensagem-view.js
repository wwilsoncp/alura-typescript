import { View } from "./view.js";
var MessageType;
(function (MessageType) {
    MessageType["INFO"] = "info";
    MessageType["SUCCESS"] = "success";
    MessageType["DANGER"] = "danger";
    MessageType["WARNING"] = "warning";
})(MessageType || (MessageType = {}));
export class MensagemView extends View {
    template(model) {
        return `
      <p class="alert alert-${model.tipo}">${model.texto}</p>
    `;
    }
    updateError(message) {
        this.updateMessage(MessageType.DANGER, message);
    }
    updateSuccess(message) {
        this.updateMessage(MessageType.SUCCESS, message);
    }
    updateMessage(type, message) {
        const mensagem = {
            tipo: type,
            texto: message,
        };
        this.update(mensagem);
    }
}
