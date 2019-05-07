export function joinArrays(arr: any) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            arr.splice.apply(arr, [i, 1, ...arr[i]]);
            i = -1;
        }
    }

    return arr;
}

export function test() {
    console.log(joinArrays([1, 2, [3, 4, [5, 6]], [7]]));
}