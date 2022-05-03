export function template() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const retornoMetodoOriginal = metodoOriginal.apply(this, args);
            return retornoMetodoOriginal;
        };
        return descriptor;
    };
}
//# sourceMappingURL=template-decorator.js.map