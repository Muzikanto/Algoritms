export   function getEasyNumbers(number) {
    const result = [2];
    for (let value = 3; value < number; value += 2) {
        let toAdd = true;
        for (let j = 0; j < result.length && result[j] <= Math.sqrt(value); j++)
            if (value % result[j] === 0) {
                toAdd = false;
                break;
            }
        if (toAdd) result.push(value)
    }
    return result;
}