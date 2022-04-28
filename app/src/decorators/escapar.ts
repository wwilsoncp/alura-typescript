// este é um template que pode ser usado para criar qualquer decorator
export function escapar() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
      let retornoMetodoOriginal = metodoOriginal.apply(this, args);
      if (typeof retornoMetodoOriginal === "string") {
        console.log(
          `@escape em ação na classe: ${this.constructor.name} para o método ${propertyKey}`
        );
        retornoMetodoOriginal = retornoMetodoOriginal.replace(
          /<script>[\s\S]*?<\/script>/,
          ""
        );
      }
      return retornoMetodoOriginal;
    };
    return descriptor;
  };
}
