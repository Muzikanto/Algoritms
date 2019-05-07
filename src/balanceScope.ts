// Баланс скобок в строке ({[
import {IObject} from "./typings";

export function balanceScope(str: string): boolean {
    const openBr: IObject = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    const closeBr: IObject = {
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

export function testBalanceScope() {
    console.log(balanceScope('{()[{}]}'), balanceScope('{(){[}]}'));
}
