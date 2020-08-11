"use strict";
exports.__esModule = true;
var makeAddPropForList_js_1 = require("./functions/makeAddPropForList.js");
var list = [
    {
        age: 23,
        name: 'jack',
        salary: 1000
    },
    {
        age: 24,
        name: 'bob',
        salary: 2000
    },
    {
        age: 25,
        name: 'marry',
        salary: 3000
    },
    {
        age: 26,
        name: 'tom',
        salary: 4000
    },
    {
        name: 'no age',
        salary: 5000
    },
];
var addBoss = makeAddPropForList_js_1["default"]('boss', 'Xiaoming');
var addTitle = makeAddPropForList_js_1["default"]('title', 'doctor');
var addAge = makeAddPropForList_js_1["default"]('age', 1111, false);
var raiseSalary = makeAddPropForList_js_1["default"]('salary', function (item) {
    var age = item.age, salary = item.salary;
    return age ? age * 10 + salary : salary;
});
var capitalizeName = makeAddPropForList_js_1["default"]('name', function (item) {
    var name = item.name;
    return name[0].toUpperCase() + name.slice(1);
});
var comprehensiveFunc = makeAddPropForList_js_1["default"]([
    {
        key: 'boss',
        val: 'robin'
    },
    {
        key: 'title',
        val: 'doctor'
    },
    {
        key: 'age',
        val: 222222,
        overwritten: false
    },
    {
        key: 'salary',
        val: function (item) {
            var age = item.age, salary = item.salary;
            return age ? age * 10 + salary : salary;
        }
    },
    {
        key: 'name',
        val: function (item) {
            var name = item.name;
            return name[0].toUpperCase() + name.slice(1);
        }
    }
]);
var res = comprehensiveFunc(list);
// var res = compose(
//     raiseSalary,
//     addAge,
//     capitalizeName,
//     addBoss,
//     addTitle
// )(list);
console.log(res);
