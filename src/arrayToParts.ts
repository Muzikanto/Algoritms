import {generateArr} from "../helpers";

export function arraytoParts(arr: number[]): string {
    arr.sort((a,b)=>a-b);
    const result: Array<{max: number, min: number}> = [];
    for (const v of arr) {
        if (result.length === 0 || v !== result[result.length - 1].max + 1)
            result.push({min: v, max: v});
        else
            result[result.length - 1].max = v;
    }
    return result.map(el => el.max === el.min ? el.min : `${el.min}-${el.max}`).join(',');
}

export function testArraytoParts() {
    const testArr = generateArr({count: 20, otr: true});
    console.log(arraytoParts([...testArr]));
}