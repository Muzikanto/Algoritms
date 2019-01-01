// Баланс скобок в строке ({[
export function balanceScope(str) {
    const closeBr = {
        '}': '{',
        ']': '[',
        ')': '('
    };
    const openBr = {
        '{': '}',
        '[': ']',
        '(': ')'
    };
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        if (openBr[str[i]]) stack.push(str[i]);
        else {
            let cb = closeBr[str[i]];
            if (cb) {
                if (stack[stack.length - 1] === cb) stack.pop();
                else return false;
            }
        }
    }
    return stack.length === 0
}
