// Развернуть односвязный список
import {generateArr, generateList} from "../helpers";

export function reverseQueue(list: any) {
    let newList = {};
    let current = list;
    while (current) {
        newList = {next: newList, value: current.value};
        current = current.next;
    }
    return newList
}

export function testReverseQueue() {
    const testArr = generateArr({count: 20, otr: true});
    console.log(reverseQueue(generateList([...testArr])));
}