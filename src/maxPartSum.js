// Выбрать в массиве фрагмент с наибольшей суммой
export function getMaxPartSum(arr) {
    return arr.reduce((acc, el, i) => {
        arr.slice(i + 1).reduce((acc2, el2, i2) => {
            acc2.sum += el2;
            acc = acc2.sum > acc.sum ? {...acc2, ...{end: i2 + i + 1}} : acc;
            return acc2;
        }, {sum: el});
        return {...{start: i}, ...acc};
    }, {sum: 0});
}