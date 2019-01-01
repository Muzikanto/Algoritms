// Генерация скобочных последовательностей
export function generateScopes(count) {
    if (!count)
        return;
    const countScop = count * 2;
    const arr = [];
    const max = 4 ** count - (2 ** count) + 1;
    for (let i = 2 ** count - 1; i < max; i++) {
        arr.push(i);
    }

    function normalize(value) {
        return (new Array(countScop - value.length).fill(0).join('')) + value;
    }

    function balance(str) {
        const stack = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '0') stack.push(str[i]);
            else {
                if (stack[stack.length - 1] === '0') stack.pop();
                else return false;
            }
        }
        return stack.length === 0
    }

    return arr
        .map(el => normalize(el.toString(2)))
        .filter((el) => balance(el))
        .map((el) => el.replace(/0/gi, "(").replace(/1/gi, ")"))
}