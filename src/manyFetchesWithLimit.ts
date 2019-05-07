export function fetchesWithLimit(urls: string[], limit: number, callback: (result: any) => void) {
    const proxy: any[] = new Proxy([], {
        set: (arr: any[], i: number, value: any) => {
            fetch(value)
                .then(data => {
                    arr[i] = data;
                    if (arr.length !== urls.length)
                        proxy[arr.length - 1] = urls[arr.length - 1];
                    else {
                        callback(arr);
                    }
                });
            return true;
        }
    });
    for (let i = 0; i < limit; i++) {
        proxy[i] = urls[i];
    }
}
