export function arrayToBuckets(arr) {
    return arr.reduce((acc, el) => {
        const bucket = el - el % 10;
        const index = `${bucket}-${bucket + 9}`;
        if (!acc[index])
            acc[index] = [el];
        else
            acc[index].push(el);
        return acc;
    }, {});
}