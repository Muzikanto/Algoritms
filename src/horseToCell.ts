export function horseToCell({start = {x: 0, y: 0}, target = {x: 0, y: 1}}) {
    const mapStart: Array<Array<string | number>> = [];
    let horse = start;
    for (let y = 0; y < 8; y++) {
        mapStart[y] = [];
        for (let x = 0; x < 8; x++)
            mapStart[y][x] = '';
    }


    let move = true;
    let reverse = null;
    let currentStep = 0;
    while (currentStep < 1000) {
        if (move) {
            let jump = false;
            if (!jump && Math.abs(horse.x - target.x) > 1) {
                jumpHorizontal(horse, target);
                jump = true;
            }
            if (!jump && Math.abs(horse.y - target.y) > 1) {
                jumpVertical(horse, target);
                jump = true;
            }
            move = jump;
        }
        if (!move) {
            if (reverse === null) {
                if (target.y !== horse.y && target.x === horse.x)
                    reverse = reverseY(horse, target);
                else if (target.y === horse.y && target.x !== horse.x)
                    reverse = reverseX(horse, target);
                else if (target.y !== horse.y && target.x !== horse.x) {
                    reverse = jumpXY(horse, target);
                }
            }
            if (reverse) {
                const next = reverse.next();
                if (next.value === false) {
                    reverse = null;
                    currentStep--;
                }
                if (next && next.value) {
                    const {dx, dy} = next.value;
                    horse.x += dx;
                    horse.y += dy;
                }
            }
        }

        mapStart[horse.y][horse.x] = currentStep++;
        if (horse.x === target.x && horse.y === target.y) {
            mapStart[horse.y][horse.x] = 'X';
            break;
        }
    }


    function jumpHorizontal(h: {x: number, y: number}, t: {x: number, y: number}) {
        let dx = 0, dy = 0;
        if (t.x > h.x) {
            dx = 2;
        } else {
            dx = -2;
        }

        dy = t.y > h.y ? 1 : -1;

        if (dy < 0)
            dy = h.y - 1 >= 0 ? -1 : 1;
        else if (dy > 0)
            dy = h.y + 1 < 8 ? 1 : -1;

        h.x += dx;
        h.y += dy;
    }

    function jumpVertical(h: {x: number, y: number}, t: {x: number, y: number}) {
        let dx = 0, dy = 0;
        if (t.y > h.y) dy = 2;
        else dy = -2;

        dx = t.x > h.x ? 1 : -1;

        if (dx < 0)
            dx = h.x - 1 >= 0 ? -1 : 1;
        else if (dx > 0)
            dx = h.x + 1 < 8 ? 1 : -1;

        h.x += dx;
        h.y += dy;
    }

    function* reverseY(h: {x: number, y: number}, t: {x: number, y: number}) {
        if (t.y > h.y) {
            if (h.y <= 4) {
                if (h.x + 2 < 8) {
                    yield {dx: 2, dy: 1};
                    yield {dx: -1, dy: 2};
                    yield {dx: -1, dy: -2};
                } else {
                    yield {dx: -2, dy: 1};
                    yield {dx: 1, dy: 2};
                    yield {dx: 1, dy: -2};
                }
            } else {
                if (h.x + 2 < 8) {
                    yield {dx: 2, dy: 1};
                    yield {dx: -1, dy: -2};
                    yield {dx: -1, dy: 2};
                } else {
                    yield {dx: -2, dy: 1};
                    yield {dx: 1, dy: -2};
                    yield {dx: 1, dy: 2};
                }
            }
        } else {
            if (h.y <= 4) {
                if (h.x + 2 < 8) {
                    yield {dx: 1, dy: 2};
                    yield {dx: 1, dy: -2};
                    yield {dx: -2, dy: -1};
                } else {
                    yield {dx: -1, dy: 2};
                    yield {dx: -1, dy: -2};
                    yield {dx: 2, dy: -1};
                }
            } else {
                if (h.x + 2 < 8) {
                    yield {dx: 2, dy: -1};
                    yield {dx: -1, dy: -2};
                    yield {dx: -1, dy: 2};
                } else {
                    yield {dx: -2, dy: -1};
                    yield {dx: 1, dy: -2};
                    yield {dx: 1, dy: 2};
                }
            }
        }
        return false;
    }

    function* reverseX(h: {x: number, y: number}, t: {x: number, y: number}) {
        if (t.x > h.x) {
            if (h.x <= 4) {
                if (h.y + 2 < 8) {
                    yield {dx: 1, dy: 2};
                    yield {dx: 2, dy: -1};
                    yield {dx: -2, dy: -1};
                } else {
                    yield {dx: 1, dy: -2};
                    yield {dx: 2, dy: 1};
                    yield {dx: -2, dy: 1};
                }
            }
            else {
                if (h.y + 2 < 8) {
                    yield {dx: 1, dy: 2};
                    yield {dx: -2, dy: -1};
                    yield {dx: 2, dy: -1};
                } else {
                    yield {dx: 1, dy: -2};
                    yield {dx: -2, dy: 1};
                    yield {dx: 2, dy: 1};
                }
            }
        } else {
            if (h.x <= 4) {
                if (h.y + 2 < 8) {
                    yield {dx: -1, dy: 2};
                    yield {dx: 2, dy: -1};
                    yield {dx: -2, dy: -1};
                } else {
                    yield {dx: -1, dy: -2};
                    yield {dx: 2, dy: 1};
                    yield {dx: -2, dy: 1};
                }
            } else {
                if (h.y + 2 < 8) {
                    yield {dx: -1, dy: 2};
                    yield {dx: -2, dy: -1};
                    yield {dx: 2, dy: -1};
                } else {
                    yield {dx: -1, dy: -2};
                    yield {dx: -2, dy: 1};
                    yield {dx: 2, dy: 1};
                }
            }
        }
        return false;
    }

    // @ts-ignore
    function* jumpXY(h: {x: number, y: number}, t: {x: number, y: number}) {
        reverse = reverseX(h, t);
    }

    return mapStart;
}

export function test() {
    console.table(horseToCell({start: {x: 0, y: 0}, target: {x: 6, y: 5}}));
}
