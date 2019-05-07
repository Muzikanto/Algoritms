import {generateArr} from "../helpers";

export function bigRightItem(arr: number[]): number[] {
    const result: number[] = [];

    loop: for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                result.push(j - i);

                continue loop;
            }
        }
        result.push(0);
    }

    return result;
}

export function testBigRightItem() {
    const testArr = [72, -1, 8, 14, 8, 90, 18] ||  generateArr({count: 20});
    console.log(testArr);
    console.log(bigRightItem([...testArr]));
}
