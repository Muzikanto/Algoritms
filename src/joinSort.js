// Сортировка слиянием
export function joinSort(arr) {
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