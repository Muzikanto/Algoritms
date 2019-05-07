// Бинарный поиск
import {mergeSort} from "./mergeSort";
import {generateArr} from "../helpers";

export function binarySearch(d: number[], t: number, s = 0, e = d.length): number {
    const m = Math.floor((s + e) / 2);
    if (t === d[m]) {
        let f = m;
        while (d[f - 1] === t && f > 0)
            f--;
        return f
    }
    if (e - 1 === s) return -1;
    if (t > d[m]) return binarySearch(d, t, m, e);
    if (t < d[m]) return binarySearch(d, t, s, m);

    return -1;
}

export function testBinariSearch() {
    const testArr = generateArr({count: 20, otr: true});
    console.log(binarySearch(mergeSort([...testArr]), testArr[Math.floor(Math.random() * testArr.length)]));
}
