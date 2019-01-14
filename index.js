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
import {RedBlackTreeDeep} from "./src/rbTreeDeep.js";
import {ProxyTest} from "./proxy.js";


// console.table(horseToCell({start: {x: 0, y: 0}, target: {x: 6, y: 5}}));
// console.table(get8FerziesMap());
// console.log(generateScopes(4));
// console.log(numberCombinations(4));
// console.log(getMaxPartSum(generateArr({count: 30, show: true, otr: true})));
// console.log(mergeSort(generateArr({count: 30, show: true, otr: true})));
// console.log(spiralString(5));
// console.log(getEasyNumbers(1000));
// console.log(isAnagram('1234', '3412'), isAnagram('1234', '1243'));
// console.log(balanceScope('{()[{}]}'), balanceScope('{(){[}]}'));
// const arr = bubbleSort(generateArr({count: 30, show: true, otr: true}));
// const findVal = arr[Math.floor(Math.random() * arr.length)];
// console.log('Find Value', findVal);
// console.log(binarySearch(arr, findVal));
// console.log(treeInWidth(generateBinaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], {show: true})));
// console.log(treeInDeep(generateBinaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], {show: true})));
// console.log(insertSort(generateArr({count: 30, show: true, otr: true})));
// console.log(selectSort(generateArr({count: 30, show: true, otr: true})));
// console.log(sheikerSort(generateArr({count: 30, show: true, otr: true})));
// console.log(reverseQueue(generateList({show: true})));
// console.log(bubbleSort(generateArr({count: 30, show: true, otr: true})));
// console.log(RedBlackTreeDeep(toRedBlackTree(mergeSort(generateArr({count: 30, show: false, otr: true})))));

// const arr = generateArr({count: 1000000, max: 100, show: false, otr: true});
// для 10 000, для 100 000, для 1 000 000
// checkTime(bubbleSort, arr);  // 95 8518 слишком долго
// checkTime(sheikerSort, arr); // 78 7313 слишком долго
// checkTime(insertSort, arr);  // 53 5817 слишком долго
// checkTime(selectSort, arr);  // 70 6500 слишком долго
// checkTime(mergeSort, arr);   // 13 58  430
// checkTime(hashSort, arr);    // 2  22  85  840



const test = {
    show(){
        console.log(this.one)
    }
};

const obj = {
    one: 'one'
};

test.show.apply(obj);


// Массив чисел
function generateArr({count = 20, max = 100, show = false, otr = false}) {
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
function generateList({show = false} = {}) {
    const list = {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null
                }
            }
        }
    };
    if (show)
        console.log('Test list', list);
    return list;
}

// Скорость работы
function checkTime(func, ...arg) {
    console.time(func.name);
    const result = func(...arg);
    console.timeEnd(func.name);
    return result;
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
