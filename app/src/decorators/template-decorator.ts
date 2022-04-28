// este é um template que pode ser usado para criar qualquer decorator
export function template() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
      //
      // faz o que tem que fazer ANTES de executar o método
      //
      const retornoMetodoOriginal = metodoOriginal.apply(this, args);
      //
      // faz o que tem que fazer DEPOIS de executar o método
      //
      return retornoMetodoOriginal;
    };
    return descriptor;
  };
}
