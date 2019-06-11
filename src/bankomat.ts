export function bankomat(list: { [key: string]: number }, value: number) {
    const result: number[] = [];

    let current: number = 0;

    const map = Object.keys(list)
        .map(key => ({value: Number(key), count: list[key]}))
        .sort((a, b) => b.value - a.value);

    for (const [i, el] of map.entries()) {
        while (el.count > 0 && current + el.value <= value) {
            current += el.value;
            map[i].count--;
            result.push(el.value);
        }
    }

    return current === value ? result.reduce((acc: any, el) => {
        acc[el] =  acc[el] ? acc[el] + 1 : 1;
        return acc;
    }, {}) : 'Error';
}

export function testBankomat() {
    console.log(bankomat({
        1000: 5,
        500: 1,
        200: 4,
        5000: 2,
        50: 4,
    }, 11750));
}
