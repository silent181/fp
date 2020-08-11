"use strict";
exports.__esModule = true;
exports.isObject = exports.isFunction = void 0;
function isFunction(input) {
    return input && typeof input === 'function';
}
exports.isFunction = isFunction;
function isObject(input) {
    return Object.prototype.toString.call(input) === '[object Object]';
}
exports.isObject = isObject;
