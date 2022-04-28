export function logTimeExecution(inSeconds: boolean = false) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    // guarda a referência do método original, que vem através do descriptor
    const metodoOriginal = descriptor.value;
    // substitui o método pelo método customizado
    descriptor.value = function (...args: any[]) {
      let divisor = 1;
      let unidade = "milisegundos";
      if (inSeconds) {
        divisor = 1000;
        unidade = "segundos";
      }
      // implementa a rotina que precisa para o decorator
      const t1 = performance.now();
      // executa o método original, guardando o retorno
      const retornoMetodoOriginal = metodoOriginal.apply(this, args);
      const t2 = performance.now();
      console.log(
        `Tempo de Execução do "${propertyKey}": ${
          (t2 - t1) / divisor
        } ${unidade}`
      );
      // ao final da execução do decorator, deverá retornar o retorno do método original
      return retornoMetodoOriginal;
    };
    return descriptor;
  };
}
