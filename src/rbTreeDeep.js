export function RedBlackTreeDeep(tree) {
    return [...tree.left ? RedBlackTreeDeep(tree.left) : [], ...[tree.value], ...tree.right ? RedBlackTreeDeep(tree.right) : []]
}