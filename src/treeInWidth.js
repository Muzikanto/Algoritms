// Обход дерева в ширину
export function treeInWidth(tree) {
    let result = [];
    let queue = [tree];
    for (let i = 0; i < queue.length; i++) {
        let item = queue[i];
        result.push(item.value);
        if (item.child) queue.push.apply(queue, item.child)
    }
    return result;
}
