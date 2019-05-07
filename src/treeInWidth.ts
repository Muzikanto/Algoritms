// Обход дерева в ширину
import {generateArr, generateBinaryTree} from "../helpers";

export function treeInWidth(tree: any): number[] {
    const result = [];
    const stack = [tree];
    for (let i = 0; i < stack.length; i++) {
        result.push(stack[i].value);
        stack.push.apply(stack, stack[i].child);
    }
    return result;
}

export function testTreeInWidth() {
    const testArr = generateArr({count: 20, otr: true});
    console.log(treeInWidth(generateBinaryTree([...testArr])));
}
