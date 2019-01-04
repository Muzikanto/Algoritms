//
export function hashSort(arr) {
    const hash = {}, hashM = {};
    for (const v of arr) {
        if (v < 0) {
            const val = Math.abs(v);
            if (!hash[val])
                hashM[val] = 1;
            else
                hashM[val]++;
        } else {
            if (!hash[v])
                hash[v] = 1;
            else
                hash[v]++;
        }
    }
    return [...Object.keys(hashM).reduceRight((acc, key) => {
        const val = -parseInt(key);
        for (let i = 0; i < hashM[key]; i++)
            acc.push(val)
        return acc;
    }, []), ...Object.keys(hash).reduce((acc, key) => {
        const val = parseInt(key);
        for (let i = 0; i < hash[key]; i++)
            acc.push(val)
        return acc;
    }, [])]
}
