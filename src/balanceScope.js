// Баланс скобок в строке ({[
export function balanceScope(str) {
    const openBr = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    const closeBr = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    const stack = [];
    for (const v of str) {
        if (v in openBr) stack.push(v);
        else {
            if (closeBr[v] === stack[stack.length - 1]) stack.pop();
            else return false;
        }
    }
    return stack.length === 0;
}
