export function isFunction(input) {
    return input && typeof input === 'function';
}

export function isObject(input) {
    return Object.prototype.toString.call(input) === '[object Object]';
}