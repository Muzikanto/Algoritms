export const arrayNumbersAndSigns = (arr: Array<number | string>) =>{
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            arr.splice(i - 2, 3, eval(`${arr[i - 2]}${arr[i]}${arr[i - 1]}`));
            i -= 2;
        }
    }
    return arr;
};

export function testArrayNumbersAndSigns() {
    console.log(arrayNumbersAndSigns([3, 2, '*', 5, '+', 3, '-']));
}