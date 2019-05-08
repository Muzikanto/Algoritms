import {IObject} from "./typings";

export function topK(arr: number[][], count: number) {
    const hash: IObject = arr.reduce((acc: IObject, el: number[]) => {
        el.forEach(el => {
            if (typeof acc[el] === 'undefined')
                acc[el] = 1;
            else
                acc[el]++;
        });

        return acc;
    }, {});

    return Object
        .keys(hash)
        .map(key => ({key, value: hash[key]}))
        .sort((a: any, b: any) => b.value - a.value)
        .slice(0, count)
        .map(el => Number(el.key));
}

export function testTopK() {
    console.log(topK([
        [1, 2, 3],
        [3, 4, 8],
        [1, 8],
        [1]
    ], 1))
}