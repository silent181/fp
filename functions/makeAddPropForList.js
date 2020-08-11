"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var utils_js_1 = require("./utils.js");
function makeAddPropForList() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var _a = getArguments(args), key = _a.key, val = _a.val, overwritten = _a.overwritten, keyValues = _a.keyValues;
    var areMultipleProps = keyValues.length > 0;
    return function (list) {
        if (list === void 0) { list = []; }
        return list.map(function (item, index, array) {
            if (areMultipleProps) {
                var addedProps = keyValues.reduce(function (props, _a) {
                    var key = _a.key, val = _a.val, overwritten = _a.overwritten;
                    return addProp(item, key, val, overwritten, index, array, props);
                }, {});
                return __assign(__assign({}, item), addedProps);
            }
            return addProp(item, key, val, overwritten, index, array);
        });
    };
}
exports["default"] = makeAddPropForList;
// 若props传一个对象，则表示有多条prop，在keyValues.reduce方法里执行
function addProp(item, key, val, overwritten, index, array, props) {
    var _a;
    var shouldSkipCurrentProp = !overwritten && item[key] != null;
    var ret = utils_js_1.isObject(props) ? props : item;
    if (shouldSkipCurrentProp) {
        return ret;
    }
    var value = utils_js_1.isFunction(val) ? val(item, index, array) : val;
    return __assign(__assign({}, ret), (_a = {}, _a[key] = value, _a));
}
function getArguments(args) {
    var key;
    var val;
    var overwritten;
    var keyValues = [];
    if (Array.isArray(args[0])) {
        keyValues = args[0].map(function (a) { return (__assign(__assign({}, a), { overwritten: a.overwritten !== false })); });
    }
    else {
        key = args[0], val = args[1], overwritten = args[2];
    }
    return {
        key: key,
        val: val,
        overwritten: overwritten !== false,
        keyValues: keyValues
    };
}
