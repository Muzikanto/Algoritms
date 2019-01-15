export function joinArrays(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            arr.splice.apply(arr, [i, 1].concat(arr[i]));
            i = 0;
        }
    }
    return arr;
}