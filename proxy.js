export const ProxyTest = () => {
    const arr = [
        ['Google Chrome', '65.0', 'desktop', '109966'],
        ['Google Chrome', '64.0', 'mobile', '107513'],
        ['Google Chrome', '63.0', 'desktop', '86686'],
        ['Google Chrome', '66.0', 'desktop', '38816'],
        ['Firefox', '64.0', 'mobile', '15593'],
        ['Firefox', '57.0', 'mobile', '13740'],
        ['Safari', '11.0', 'desktop', '12943'],
        ['Yandex.Browser', '18.1', 'desktop', '12088'],
        ['Chrome Mobile', '64.0', 'mobile', '10541'],
        ['Yandex.Browser', '17.11', 'desktop', '9088']
    ];

    const proxy = withProxy(arr);
    function withProxy(arr) {
        return new Proxy(arr, {
            get(data, prop) {
                const result = [];
                if (isNaN(prop) && prop.indexOf('<') === -1 && prop.indexOf('>') === -1) {
                    if (prop === 'desktop' || prop === 'mobile') {
                        result.push.apply(result, data.filter(el => el[2] === prop));
                    } else {
                        result.push.apply(result, data.filter(el => el[0] === prop));
                    }
                } else {
                    if (prop.indexOf('<') !== -1) {
                        result.push.apply(result, data.filter(el => el[1] < prop.split('<')[1]))
                    } else if (prop.indexOf('>') !== -1) {
                        result.push.apply(result, data.filter(el => el[1] > prop.split('>')[1]));
                    } else {
                        result.push.apply(result, data.filter(el => el[1] === prop))
                    }
                }
                return withProxy(result);
            },
            set(data, prop, val) {
                data[prop] = val;
            }
        });
    }

    console.log(proxy.desktop['Google Chrome']['>63.0']);
    console.log(proxy['<58.0'].Firefox.mobile);

};

()=> {
    const test = {
        one: 1,
        sum(a, b) {
            return a + b;
        }
    };

    const handler = {
        get(target, propKey, receiver) {
            if (typeof target[propKey] === 'function') {
                return new Proxy(target[propKey], {
                    apply(applyTarget, thisArg, args) {
                        return Reflect.apply(applyTarget, thisArg, args);
                    }
                });
            }

            if (target.hasOwnProperty(propKey)) {

            }

            return target[propKey];
        }
    };

    const proxy = new Proxy(test, handler);


    console.log(proxy.sum(1, 2));
    console.log(proxy.one);
}