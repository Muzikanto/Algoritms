// Обход дерева в глубину
import {generateArr, generateBinaryTree} from "../helpers";

export function treeInDeep(tree: any) {
    return [...tree.child ? tree.child.reduce((acc: number[], el: any) => [...acc, ...treeInDeep(el)], []) : [], ...[tree.value]];
}

export function testTreeInDeep() {
    const testArr = generateArr({count: 20, otr: true});
    console.log(treeInDeep(generateBinaryTree([...testArr])));
}