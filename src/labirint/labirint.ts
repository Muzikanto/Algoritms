export function labirint({width, height}: { width: number, height: number }) {
    const map: number[][] = [];
    const queue: Array<{ x: number, y: number }> = [];

    for (let x = 0; x < width; x++) {
        map[x] = [];
        for (let y = 0; y < height; y++) {
            map[x][y] = 0;
        }
    }

    let current = {x: 1, y: 1};
    place();

    while (queue.length !== 0) {
        place();
    }

    function place() {
        map[current.x][current.y] = 1;
        const dataPlace = random(current);
        if (dataPlace) {
            const {middle, next, arr} = dataPlace;
            map[middle.x][middle.y] = 1;
            map[next.x][next.y] = 1;
            current = {...next};
            queue.push.apply(queue, arr);
        } else {
            if (queue.length > 0) {
                current = queue[queue.length - 1];
                queue.pop();
            }
        }
    }

    function random({x, y}: { x: number, y: number }) {
        let vectors = [];

        if (x + 2 < width) {
            vectors.push({x: x + 2, y});
        }
        if (x - 2 >= 0) {
            vectors.push({x: x - 2, y});
        }
        if (y + 2 < height) {
            vectors.push({x: x, y: y + 2});
        }
        if (y - 2 >= 0) {
            vectors.push({x: x, y: y - 2});
        }

        vectors = vectors.filter(el => !map[el.x][el.y]);

        if (vectors.length === 0) {
            return null;
        } else {
            const rand = Math.floor(Math.random() * vectors.length);
            const next = {...vectors[rand]};
            const middle = {x: x + (next.x - x) / 2, y: y + (next.y - y) / 2};
            const arr = vectors;
            arr.splice(0, rand);

            if (x === 0 && y === 0) {
                console.log(middle, next)
            }
            return {middle, next, arr};
        }
    }

    return map;
}
