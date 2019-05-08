function oneDementionCellularAutomat(arr: number[], iterations: number) {
    let result: number[] = [...arr];

    for(let it = 0; it < iterations; it++) {
        let current = [...result];
        for (let i = 0; i < arr.length; i++) {
            if (i === 0) {
                current[i] = Number(result[i + 1] !== 0);
            } else if (i === arr.length - 1) {
                current[i] = Number(result[i - 1] !== 0);
            } else {
                current[i] = Number(result[i - 1] !== result[i + 1]);
            }
        }
        result = [...current];
    }

    return result;
}

export function testOneDementionCellularAutomat() {
    const arr = new Array(9).fill(0).map(_=> Number(Math.random() >= 0.5));
    console.log(arr);
    console.log(oneDementionCellularAutomat(arr, 2));
}