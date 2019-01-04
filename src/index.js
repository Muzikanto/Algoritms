import {isAnagram} from "./anagram.js";
import {balanceScope} from "./balanceScope.js";
import {binarySearch} from "./binarySearch.js";
import {bubbleSort} from "./bubbleSort.js";
import {getEasyNumbers} from "./easyNumbers.js";
import {get8FerziesMap} from "./ferzies.js";
import {generateScopes} from "./generateScopes.js";
import {insertSort} from "./insertSort.js";
import {mergeSort} from "./mergeSort.js";
import {getMaxPartSum} from "./maxPartSum.js";
import {numberCombinations} from "./numberCombinations.js";
import {reverseQueue} from "./reverseQueque.js";
import {selectSort} from "./selectSort.js";
import {sheikerSort} from "./sheikerSort.js";
import {spiralString} from "./spiralString.js";
import {treeInWidth} from "./treeInWidth.js";
import {treeInDeep} from "./treeInDeep.js";
import {horseToCell} from "./horseToCell.js";
import {hashSort} from "./hashSort.js";


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

//const arr = generateArr({count: 1000000, max: 100, show: false, otr: true});
// для 10 000, для 100 000, для 1 000 000
// checkTime(bubbleSort, arr);  // 95 8518 слишком долго
// checkTime(sheikerSort, arr); // 78 7313 слишком долго
// checkTime(insertSort, arr);  // 53 5817 слишком долго
// checkTime(selectSort, arr);  // 70 6500 слишком долго
// checkTime(mergeSort, arr);   // 13 58  430
// checkTime(hashSort, arr, 4); // 2  22  85


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

// Дерево
function generateBinaryTree(arr, {show = false}) {
    const tree = createTree(arr);
    if (show)
        console.log(tree);
    return tree;

    function createTree(arr) {
        const m = Math.floor(arr.length / 2);
        if (arr.length <= 1) return {value: arr[0]};
        const child = [createTree(arr.slice(0, m))];
        if (arr.length > 2) child.push(createTree(arr.slice(m + 1)));
        return {
            value: arr[m],
            child
        };
    }
}

// Односвязный список
function generateList({show = false}) {
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

//
function checkTime(func, ...arg) {
    console.time(func.name);
    const result = func(...arg);
    console.timeEnd(func.name);
    return result;
}

//
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
