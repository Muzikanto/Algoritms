// Сортировка пузырьком
import {generateArr} from "../helpers";

export function bubbleSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr
}

export function testBubbleSort() {
    const testArr = generateArr({count: 20, otr: true});
    console.log(bubbleSort([...testArr]));
}