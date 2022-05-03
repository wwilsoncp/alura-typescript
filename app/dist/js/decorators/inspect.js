export function inspectMethod() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`--- Método: ${propertyKey}`);
            console.log(`------ Parâmetros: ${JSON.stringify(args)}`);
            const retornoMetodoOriginal = metodoOriginal.apply(this, args);
            console.log(`------ Retorno: ${JSON.stringify(retornoMetodoOriginal)}`);
            return retornoMetodoOriginal;
        };
        return descriptor;
    };
}
//# sourceMappingURL=inspect.js.map