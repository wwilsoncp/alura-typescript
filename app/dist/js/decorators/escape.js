export function escape() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let retornoMetodoOriginal = metodoOriginal.apply(this, args);
            if (typeof retornoMetodoOriginal === "string") {
                console.log(`@escape em ação na classe: ${this.constructor.name} para o método ${propertyKey}`);
                retornoMetodoOriginal = retornoMetodoOriginal.replace(/<script>[\s\S]*?<\/script>/, "");
            }
            return retornoMetodoOriginal;
        };
        return descriptor;
    };
}
