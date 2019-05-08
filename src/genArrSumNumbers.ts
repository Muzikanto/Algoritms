export function genArrSumNumbers(count: number, sum: number) {
    const result: number[] = [];

    let currentSum = 0;
    for (let i = 0; i < count; i++) {
        const value = Math.floor(Math.random() * ((sum - currentSum) / 2) + 1);
        result.push(value);
        currentSum += value;
    }

    return result;
}

export function testGenArrSumNumbers() {
    console.log(genArrSumNumbers(5, 10));
}
