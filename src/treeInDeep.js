// Обход дерева в глубину
export function treeInDeep(tree) {
    return [...tree.child ? tree.child.reduce((acc, el) => [...acc, ...treeInDeep(el)], []) : [], ...[tree.value]];
}