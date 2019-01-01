//  Вывод чисел от 1 до N^2 по спирали
export function spiralString(value) {
    let arr = [];
    for (let i = 0; i < value; i++)
        arr[i] = [];
    let dx = 1, dy = 0;
    let x = 0, y = 0;
    let i = 1;
    while (i <= value * value) {
        arr[y][x] = i.toString();
        if (dx === 1) {
            if (x + 1 >= value || arr[y][x + 1]) {
                dx = 0;
                dy = 1;
            }
        }
        else if (dx === -1) {
            if (x - 1 < 0 || arr[y][x - 1]) {
                dx = 0;
                dy = -1;
            }
        }
        else if (dy === 1) {
            if (y + 1 >= value || arr[y + 1][x]) {
                dx = -1;
                dy = 0;
            }
        }
        else {
            if (y - 1 < 0 || arr[y - 1][x]) {
                dx = 1;
                dy = 0;
            }
        }
        x += dx;
        y += dy;
        i++;
    }
    return arr.reduce((acc, el) => `${acc}${el}\n`, '');
}