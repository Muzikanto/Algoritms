// Вывести все перестановки чисел о 1 до N
export function numberCombinations(value) {
    let arr = [];
    const count = getCount(value);
    for (let i = 0; i < count; i++) arr.push([]);

    for (let column = 0; column < value; column++) {
        const delVal = getDelValue(column);
        for (let i = 0, j = 0; j < count; i++) {
            const val = Math.floor(i / delVal) % value + 1;
            if (!existsValue(arr[j], val))
                arr[j++][column] = val;
        }
    }

    function existsValue(checkArr, checkVal) {
        for (const val of checkArr)
            if (val === checkVal)
                return true;
        return false;
    }

    function getDelValue(delCount) {
        let delVal = count;
        for (let i = 0; i <= delCount; i++) {
            delVal /= (value - i);
        }
        return delVal;
    }

    function getCount(value) {
        let countValues = 1;
        for (let i = 1; i <= value; i++)
            countValues *= i;
        return countValues;
    }

    return arr;
}