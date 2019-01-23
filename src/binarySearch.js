// Бинарный поиск
export function binarySearch(d, t, s = 0, e = d.length) {
    const m = Math.floor((s + e) / 2);
    if (t === d[m]) {
        let f = m;
        while (d[f - 1] === t && f > 0)
            f--;
        return f
    }
    if (e - 1 === s) return -1;
    if (t > d[m]) return binarySearch(d, t, m, e);
    if (t < d[m]) return binarySearch(d, t, s, m);
}
