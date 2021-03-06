import { isFunction, isObject } from './utils.js';

export default function makeAddPropForList(...args) {
    const { key, val, overwritten, keyValues } = getArguments(args);
    const areMultipleProps = keyValues.length > 0;

    return (list = []) => list.map((item, index, array) => {
        if (areMultipleProps) {
            const addedProps = keyValues.reduce(
                (props, { key, val, overwritten }) => addProp(
                    item,
                    key,
                    val,
                    overwritten,
                    index,
                    array,
                    props
                ),
                {}
            );
            return {
                ...item,
                ...addedProps
            };
        }

        return addProp(
            item,
            key,
            val,
            overwritten,
            index,
            array
        );
    })
}

// 若props传一个对象，则表示有多条prop，在keyValues.reduce方法里执行
function addProp(
    item,
    key,
    val,
    overwritten,
    index,
    array,
    props
) {
    const shouldSkipCurrentProp = !overwritten && item[key] != null;
    const ret = isObject(props) ? props : item;

    if (shouldSkipCurrentProp) {
        return ret;
    }

    const value = isFunction(val) ? val(item, index, array) : val;
    return {
        ...ret,
        [key]: value
    }
}

function getArguments(args) {
    let key;
    let val;
    let overwritten;
    let keyValues = [];

    if (Array.isArray(args[0])) {
        keyValues = args[0].map(a => ({
            ...a,
            overwritten: a.overwritten !== false
        }));
    } else {
        [key, val, overwritten] = args;
    }

    return {
        key,
        val,
        overwritten: overwritten !== false,
        keyValues
    }
}

