const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin
});


// let arr = [[2, 26, 64, 88, 96, 96], [8, 20, 65, 86], [1, 4, 16, 42, 58, 61, 69], [84]];
let arr = [];
let count = null;
let secondCount = null;

rl.on('line', (line) => {
    const val = parseInt(line);
    if (count === null) count = val;
    else {
        if (arr[arr.length - 1] && arr[arr.length - 1].length === secondCount) {
            secondCount = null;
        }
        if (secondCount === null) {
            secondCount = val;
            arr.push([]);
        }
        else {
            arr[arr.length - 1].push(val);
        }
        if (arr.length === count && arr[arr.length - 1].length === secondCount)
            rl.close();
    }
}).on('close', () => {
    let dataArr = [];
    for (const v of arr) {
        dataArr = [...dataArr, ...v];
    }
    console.log(joinSort(dataArr).join(' '))
});


function joinSort(arr) {
    let one = arr.slice(0, Math.floor(arr.length / 2));
    if (one.length > 1)
        one = joinSort(one);
    let two = arr.slice(Math.floor(arr.length / 2));
    if (two.length > 1)
        two = joinSort(two);

    const newArr = [];
    for (let i1 = 0, i2 = 0; one[i1] !== undefined || two[i2] !== undefined;) {
        if (one[i1] !== undefined && (two[i2] === undefined || one[i1] <= two[i2]))
            newArr.push(one[i1++]);
        else if (two[i2] !== undefined)
            newArr.push(two[i2++]);
    }
    return newArr;
}
