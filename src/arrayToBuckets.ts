import {IObject} from "./typings";
import {generateArr} from "../helpers";

export function arrayToBuckets(arr: number[]): IObject {
    return arr.reduce((acc: IObject, el: number) => {
        const bucket = el - el % 10;
        const index = `${bucket}-${bucket + 9}`;
        if (!acc[index])
            acc[index] = [el];
        else
            acc[index].push(el);
        return acc;
    }, {});
}

export function testArrayToBuckets() {
    const testArr = generateArr({count: 20, otr: true});
    console.log(arrayToBuckets([...testArr]));
}