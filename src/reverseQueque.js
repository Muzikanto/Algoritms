// Развернуть односвязный список
export function reverseQueue(list) {
    let newList = {};
    let current = list;
    while (current) {
        newList = {next: newList, value: current.value};
        current = current.next;
    }
    return newList
}