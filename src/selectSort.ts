//Сортировка выбором
import {generateArr} from "../helpers";

export function selectSort(arr: number[]) {
    let minIndex = 1;
    let currentIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = currentIndex + 1; j < arr.length; j++)
            if (arr[j] < arr[minIndex])
                minIndex = j;
        if (minIndex !== currentIndex)
            [arr[minIndex], arr[currentIndex]] = [arr[currentIndex], arr[minIndex]];
        currentIndex++;
        minIndex = currentIndex;
    }
    return arr
}

export function testSelectSort() {
    const testArr = generateArr({count: 20, otr: true});
    console.log(selectSort([...testArr]));
}