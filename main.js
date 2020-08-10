import compose from './functions/compose.js';
import makeAddPropForList from './functions/makeAddPropForList.js';

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
]

var addBoss = makeAddPropForList('boss', 'robin')
var addTitle = makeAddPropForList('title', 'doctor')
var addAge = makeAddPropForList('age', 1111, false)
var comprehensiveFunc = makeAddPropForList([
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
        val: item => {
            const { age, salary } = item;
            return age ? age * 10 + salary : salary;
        }
    }
])

var res = comprehensiveFunc(list);

// var res = compose(
//     addBoss,
//     addTitle,
//     addAge
// )(list);

console.log(res);