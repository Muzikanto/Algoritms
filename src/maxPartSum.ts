// Выбрать в массиве фрагмент с наибольшей суммой
import {IObject} from "./typings";
import {generateArr} from "../helpers";

export function maxPartSum(arr: number[]) {
    return arr.reduce((acc: IObject, _: number, i: number)=>{
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

export function testMaxPartSum() {
    const testArr = generateArr({count: 20, otr: true});
    console.log(maxPartSum([...testArr]));
}
