import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector(".form");
if (form) {
  form.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    controller.adiciona();
  });
} else {
  throw new Error(
    "Não foi possível inicializar a aplicação. Verifique se o form existe."
  );
}

const botaoImporta = document.querySelector("#botao-importa");
if (botaoImporta) {
  botaoImporta.addEventListener("click", (_event: Event) => {
    controller.importarDados();
  });
} else {
  throw new Error("Botão importa não foi encontrado.");
}
