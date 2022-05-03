// decorator de propriedade, é utilizado na declaração da classe onde o TypeScript modifica a classe adicionando o decorator
export function domInjector(seletor: string) {
  return function (target: any, propertyKey: string) {
    console.log(
      `Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`
    );
    let element: HTMLElement;
    // Método "getter" que será utilizado na leitura da propriedade recebida no "seletor"
    const getter = function () {
      // element está em "cache", só irá obter no dom apenas uma vez, ao tentar acessar pela segunda vez, a propriedade "element" estará instanciada, logo não acessará o dom
      if (!element) {
        element = <HTMLElement>document.querySelector(seletor);
        console.log(
          `Buscando o elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`
        );
      }
      return element;
    };
    // Modifica o "target" (que é o prototype da classe que vem no target), e quando acessar a propriedade "propertyKey" execute o get que foi criado "getter"
    Object.defineProperty(target, propertyKey, { get: getter });
  };
}
