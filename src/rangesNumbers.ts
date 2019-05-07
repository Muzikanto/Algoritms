export function rangesNumbers(ranges: Array<{ min: number, max: number }>, excludes: number[]) {
    const result: string[] = [];

    let currentRange = 0;
    for (let i = 0; i < excludes.length; i++) {
        if(!(excludes[i] >= ranges[currentRange].min && excludes[i] <= ranges[currentRange].max)) {
            currentRange++;
            if (currentRange >= ranges.length) {
                break;
            }
        }

        if (excludes[i] >= ranges[currentRange].min && excludes[i] <= ranges[currentRange].max) {
            if (i + 1 < excludes.length && excludes[i + 1] <= ranges[currentRange].max) {
                if(excludes[i] + 1 <= excludes[i + 1] - 1) {
                    result.push(`${excludes[i] + 1}-${excludes[i + 1] - 1}`);
                }
            } else {
                if (excludes[i] + 1 < ranges[currentRange].max) {
                    result.push(`${excludes[i] + 1}-${ranges[currentRange].max}`);
                }
            }
        }
    }

    return result;
}

export function testRangesNumbers() {
    console.log(rangesNumbers([{min: 1, max: 100}, {min: 200, max: 300}], [1, 10, 100, 200, 300, 400]));
}
