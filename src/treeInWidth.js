// Обход дерева в ширину
export function treeInWidth(tree) {
    const result = [];
    const stack = [tree];
    for (let i = 0; i < stack.length; i++) {
        result.push(stack[i].value);
        stack.push.apply(stack, stack[i].child);
    }
    return result;
}
