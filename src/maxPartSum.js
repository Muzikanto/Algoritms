// Выбрать в массиве фрагмент с наибольшей суммой
export function getMaxPartSum(arr) {
    return arr.reduce((acc, el, i)=>{
        let part = 0;
        for (let j = i; j < arr.length; j++) {
            part += arr[j];
            if (part > acc.v) {
                acc = {v: part, s: i, e: j};
            }
        }
        return acc;
    }, {v: arr[0]});
}