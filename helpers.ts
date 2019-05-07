// Массив чисел
import {IObject} from "./src/typings";

function generateArr({count = 20, max = 100, min = 0, otr = false} = {count: 20, max: 100}) {
    let arrData = [];
    for (let i = 0; i < count; i++) {
        const value = Math.floor(Math.random() * max + min);
        arrData[i] = otr ? (Math.random() > 0.5 && value !== 0 ? -value : value) : value;
    }

    return arrData;
}

// Дерево из массива
function generateBinaryTree(arr: number[], {show = false} = {}) {
    const tree = createTree(arr);
    if (show)
        console.log(tree);
    return tree;

    function createTree(arr: number[], s = 0, e = arr.length): any {
        const m = Math.floor((s + e) / 2);
        if (e - 1 === s || s === e)
            return s !== e ? {value: arr[m], child: null} : null;
        const child = [];
        const left = createTree(arr, s, m);
        const right = createTree(arr, m + 1, e);
        if (left)
            child.push(left);
        if (right)
            child.push(right);
        return {value: arr[m], child};
    }
}

// Односвязный список
function generateList(arr: number[], {show = false} = {}) {
    const list = arr.reduce((acc: any, el) => ({next: acc, value: el}), null);
    if (show)
        console.log('Test list', list);
    return list;
}

// Сравнение массивов
function checkEquals(arr: number[], arr2: number[]) {
    if (arr.length !== arr2.length)
        return false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr2[i]) {
            return false
        }
    }
    return true;
}

function timing(timers: IObject, f: Function) {
    return function (this: any) {
        const start = performance.now();
        const func = f.apply(this, arguments);
        if (!timers[f.name]) timers[f.name] = 0;
        timers[f.name] += performance.now() - start;
        return func;
    }
}

export {
    generateArr,
    generateBinaryTree,
    checkEquals,
    timing,
    generateList
};
