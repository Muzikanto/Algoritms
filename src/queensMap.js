// Расставить 8 ферзей на шахматной доске, чтобы не били друг друга
export function getQueensMap() {
    let mapStart = [], queens = [], fields = [];
    for (let y = 0; y < 8; y++) {
        mapStart[y] = [];
        queens[y] = {x: 0, y: 0};
        for (let x = 0; x < 8; x++) {
            mapStart[y][x] = '';
        }
    }

    fields[0] = mapStart;
    while (fields.length < 8) {
        let current = fields.length - 1;
        const currentField = fields[current];
        const currentQueen = queens[current];
        const newField = getField(currentQueen, currentField);
        if (newField)
            fields.push(newField);
        else {
            if (fields.length > 1)
                fields.pop();
            for (let i = current; i < 8; i++) {
                queens[i] = {x: 0, y: 0};
            }
            current = fields.length - 1;
            if (queens[current].x + 1 > 7) {
                queens[current].x = 0;
                queens[current].y++;
            } else
                queens[current].x++;
        }
    }

    function getField(queen, field) {
        if (field[queen.y][queen.x] != '')
            return null;
        for (let y = queen.y; y < 8; y++) {
            for (let x = queen.x; x < 8; x++) {
                const secondField = checkPlaceFerz(field, {x, y});
                if (secondField)
                    return secondField;
            }
        }
        return null;
    }

    function checkPlaceFerz(testMap, {x, y}) {
        const secondMap = [];
        for (const arr of testMap) {
            secondMap.push([...arr]);
        }
        const vectors = [[0, -1], [-1, 0], [1, 0], [0, 1], [-1, -1], [1, 1], [1, -1], [-1, 1]];
        for (const vector of vectors) {
            let testX = x, testY = y;
            while (testX >= 0 && testY >= 0 && testX < 8 && testY < 8) {
                if (secondMap[testY][testX] === 1)
                    return null;
                secondMap[testY][testX] = 0;
                testY += vector[0];
                testX += vector[1];
            }
        }
        secondMap[y][x] = 1;
        return secondMap;
    }

    return fields[fields.length - 1];
}
