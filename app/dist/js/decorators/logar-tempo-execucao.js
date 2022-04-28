export function logTimeExecution(inSeconds = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unidade = "milisegundos";
            if (inSeconds) {
                divisor = 1000;
                unidade = "segundos";
            }
            const t1 = performance.now();
            const retornoMetodoOriginal = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`Tempo de Execução do "${propertyKey}": ${(t2 - t1) / divisor} ${unidade}`);
            return retornoMetodoOriginal;
        };
        return descriptor;
    };
}
