export function escapar() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let retornoMetodoOriginal = metodoOriginal.apply(this, args);
            if (typeof retornoMetodoOriginal === "string") {
                retornoMetodoOriginal = retornoMetodoOriginal.replace(/<script>[\s\S]*?<\/script>/, "");
            }
            return retornoMetodoOriginal;
        };
        return descriptor;
    };
}
//# sourceMappingURL=escapar.js.map