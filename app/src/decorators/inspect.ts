export function inspectMethod() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`--- Método: ${propertyKey}`);
      console.log(`------ Parâmetros: ${JSON.stringify(args)}`);
      const retornoMetodoOriginal = metodoOriginal.apply(this, args);
      console.log(`------ Retorno: ${JSON.stringify(retornoMetodoOriginal)}`);
      return retornoMetodoOriginal;
    };
    return descriptor;
  };
}

// esta é uma forma de criar os decorators que não recebe parâmetros
// porém ao utilizá-los nos métodos, não precisa colocar o (), ficará assim:
// @inspectMethodSemParametro
// eu prefiro criar com wrapper, pelo menos padroniza que ao utilizar os decorators o desenvolvedor deverá utilizar o (), ficará assim:
// @inspectMethodSemParametro()

/* 
export function inspectMethodSemParametro (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const metodoOriginal = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`--- Método: ${propertyKey}`);
    console.log(`------ Parâmetros: ${JSON.stringify(args)}`);
    const retornoMetodoOriginal = metodoOriginal.apply(this, args);
    console.log(`------ Retorno: ${JSON.stringify(retornoMetodoOriginal)}`);
    return retornoMetodoOriginal;
  };
  return descriptor;
};
*/
