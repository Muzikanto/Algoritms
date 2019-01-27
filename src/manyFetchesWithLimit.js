export function fetchesWithLimit(urls, limit, callback) {
    const proxy = new Proxy([], {
        set: (arr, i, value) => {
            fetch(value)
                .then(data => {
                    arr[i] = data;
                    if(arr.length !== urls.length)
                        proxy[arr.length - 1] = urls[arr.length - 1];
                    else {
                        callback(arr);
                    }
                });
            return true;
        }
    });
    for(let i = 0; i < limit; i++){
        proxy[i] = urls[i];
    }
}
