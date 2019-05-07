// Генерация скобочных последовательностей
export function generateScopes(count: number) {
    return Array.from(Array(parseInt(new Array(count * 2).fill(1).join(''), 2)), (_, i) => i)
        .map(el => ((value) => (new Array(count * 2 - value.length).fill(0).join('')) + value)(el.toString(2)))
        .filter((el) => ((str) => {
            const stack = [];
            for (let i = 0; i < str.length; i++) {
                if (str[i] === '0') stack.push(str[i]);
                else {
                    if (stack[stack.length - 1] === '0') stack.pop();
                    else return false;
                }
            }
            return stack.length === 0
        })(el))
        .map((el) => el.replace(/0/gi, "(").replace(/1/gi, ")"))
}

export function testGenerateScopes() {
    console.log(generateScopes(5));
}
