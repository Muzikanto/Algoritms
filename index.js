import {isAnagram} from "./src/anagram.js";
import {balanceScope} from "./src/balanceScope.js";
import {binarySearch} from "./src/binarySearch.js";
import {bubbleSort} from "./src/bubbleSort.js";
import {getEasyNumbers} from "./src/easyNumbers.js";
import {get8FerziesMap} from "./src/ferzies.js";
import {generateScopes} from "./src/generateScopes.js";
import {insertSort} from "./src/insertSort.js";
import {mergeSort} from "./src/mergeSort.js";
import {getMaxPartSum} from "./src/maxPartSum.js";
import {numberCombinations} from "./src/numberCombinations.js";
import {reverseQueue} from "./src/reverseQueque.js";
import {selectSort} from "./src/selectSort.js";
import {sheikerSort} from "./src/sheikerSort.js";
import {spiralString} from "./src/spiralString.js";
import {treeInWidth} from "./src/treeInWidth.js";
import {treeInDeep} from "./src/treeInDeep.js";
import {horseToCell} from "./src/horseToCell.js";
import {hashSort} from "./src/hashSort.js";
import {arrayToBuckets} from "./src/arrayToBuckets.js";
import {joinArrays} from "./src/joinArrays.js";
import {toParts} from "./src/arrayToParts.js";
import {testObject} from "./test/object.js";
import {ProxyTest} from "./test/proxy.js";


const timers = {};


const testArr = generateArr({count: 20, otr: true});
// console.table(timing(horseToCell)({start: {x: 0, y: 0}, target: {x: 6, y: 5}}));
// console.table(timing(get8FerziesMap)());
 console.log(timing(generateScopes)(4));
// console.log(timing(numberCombinations(4)));
// console.log(timing(getMaxPartSum([...testArr])));
// console.log(timing(spiralString)(5));
// console.log(timing(getEasyNumbers)(1000));
// console.log(timing(isAnagram)('1234', '3412'), isAnagram('1234', '1243'));
// console.log(timing(balanceScope)('{()[{}]}'), balanceScope('{(){[}]}'));
// console.log(timing(binarySearch)(mergeSort([...testArr]), testArr[Math.floor(Math.random() * testArr.length)]));
// console.log(timing(hashSort)([...testArr]));
// console.log(timing(mergeSort)([...testArr]));
// console.log(timing(insertSort)([...testArr]));
// console.log(timing(selectSort)([...testArr]));
// console.log(timing(sheikerSort)([...testArr]));
// console.log(timing(bubbleSort)([...testArr]));
// console.log(timing(arrayToBuckets)([...testArr]));
// console.log(timing(toParts)([1, 4, 5, 2, 3, 9, 8, 11, 0]));
// console.log(timing(reverseQueue)(generateList({show: true})));
// console.log(timing(treeInWidth)(generateBinaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], {})));
// console.log(timing(treeInDeep)(generateBinaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], {})));

// console.log(timers);



// Массив чисел
function generateArr({count = 20, max = 100, show = false, otr = false} = {count: 20, max: 100}) {
    let arrData = [];
    for (let i = 0; i < count; i++) {
        const value = Math.floor(Math.random() * max);
        arrData[i] = otr ? (Math.random() > 0.5 && value !== 0 ? -value : value ) : value;
    }
    if (show)
        console.log('Test array', arrData);
    return arrData;
}

// Дерево из массива
function generateBinaryTree(arr, {show = false} = {}) {
    const tree = createTree(arr);
    if (show)
        console.log(tree);
    return tree;

    function createTree(arr, s = 0, e = arr.length) {
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

// rb Дерево из массива
function toRedBlackTree(arr, s = 0, e = arr.length, c = 'black') {
    const m = Math.floor((s + e) / 2);
    const color = c === 'red' ? 'black' : 'red';
    if (e - 1 === s || s === e)
        return s !== e ? {value: arr[m], left: null, right: null, color} : null;
    return {
        value: arr[m],
        left: toRedBlackTree(arr, s, m, color),
        right: toRedBlackTree(arr, m + 1, e, color),
        color: c
    };
}

// Односвязный список
function generateList(arr, {show = false} = {}) {
    const list = arr.reduce((acc, el) => ({next: acc, value: el}), null);
    if (show)
        console.log('Test list', list);
    return list;
}

// Сравнение массивов
function checkEquals(arr, arr2) {
    if (arr.length !== arr2.length)
        return false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr2[i]) {
            return false
        }
    }
    return true;
}

// Тестовое rb Дерево
function getTestRedBlackTree() {
    return {
        value: 13,
        left: {
            value: 8,
            left:
                {
                    value: 1,
                    left: null,
                    right: {
                        value: 6,
                        left: null,
                        right: null
                    }
                },
            right:
                {
                    value: 11,
                    left: null,
                    right: null
                }
        }, right: {
            value: 17,
            left: {
                value: 15,
                left: null
            },
            right: {
                value: 25,
                left: {
                    value: 22,
                    left: null,
                    right: null
                },
                right: {
                    value: 27,
                    left: null,
                    right: null
                }
            }
        }
    }
}

function timing(f) {
    return function () {
        const start = performance.now();
        const result = f.apply(this, arguments);
        if (!timers[f.name]) timers[f.name] = 0;
        timers[f.name] += performance.now() - start;
        return result;
    }
}

