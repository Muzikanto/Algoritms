export function easyNumbers(number: number) {
    const result = [1, 2];
    const stack = [3];

    for (let i = 3; i <= number; i += 2) {
        let toPush = true;
        for (let j = 0; stack[j] <= Math.sqrt(i); j++) {
            if (i % stack[j] === 0) {
                toPush = false;
                break;
            }
        }
        if (toPush) {
            result.push(i);
            stack.push(i);
        }
    }
    return result;
}

export function testEasyNumbers() {
    console.log(easyNumbers(1000));
}
