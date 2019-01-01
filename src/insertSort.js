// Сортировка вставками
export function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            let current = i - 1;
            while (current > 0 && arr[i] < arr[current - 1]) {
                current--;
            }
            let second = arr[i];
            arr.splice(i, 1);
            arr.splice(current, 0, second)
        }
    }
    return arr
}