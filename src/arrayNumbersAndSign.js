export const arrayNumbersAndSigns = (arr) =>{
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            arr.splice(i - 2, 3, eval(`${arr[i - 2]}${arr[i]}${arr[i - 1]}`));
            i -= 2;
        }
    }
    return arr;
};