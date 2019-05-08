import {IObject} from "./typings";

export function createStore(reducers: { [key: string]: (action: any, store?: any) => any }) {
    const global: IObject = {};

    for (const name in reducers) {
        const action = {type: '__INIT__', payload: {}};
        const raw = reducers[name](action);
        global[name] = deepProxy(raw, name);
    }

    return {
        state: global,
        dispatch: function (action: { type: string, payload: any }) {
            for (const name in reducers) {
                reducers[name](action, global[name]);
            }
        }
    }
}

function deepProxy(data: IObject, name: string) {
    if (typeof data === "object") {
        for (const key in data) {
            if (typeof data[key] === "object") {
                data[key] = deepProxy(data[key], `${name}-${key}`);
            }
        }

        return withProxy(data, name);
    }
    return data;
}

function withProxy(raw: IObject, name: string) {
    return new Proxy(raw, {
        get(target: IObject, prop: string) {
            return target[prop];
        },
        set(target: IObject, prop: string, value: any) {
            const event = `${name}.${prop}`;

            if (typeof value === 'object') {
                target[prop] = withProxy(value, event);
            } else {
                target[prop] = value;
            }

            trigger(`${name}.${prop}`);
            return true;
        },
        deleteProperty(target: IObject, prop: string) {
            const event = `${name}.${prop}`;

            if (prop in target) {
                delete target[prop];
                trigger(event);
            }

            return true
        }
    });
}

function trigger(event: string) {
    try {
        console.log(event)
        document.dispatchEvent(new Event(event));
    } catch (e) {

    }
}

export function testReduxStore() {
    const initialState = {
        'maxim': {
            age: 20
        }
    };
    const reducer = function (action: { type: string, payload: any }, store: IObject = initialState) {
        switch (action.type) {
            case 'add':
                store[action.payload.name] = action.payload.data;

                return store;
            case 'set':
                store[action.payload.name].age = action.payload.age;

                return store;
            case 'del':
                delete store[action.payload.name];

                return {...store};
            default:
                return store;
        }
    };

    const store = createStore({
        reducer
    });

    store.dispatch({type: 'add', payload: {name: 'maxim', data: {age: 20}}});
    store.dispatch({type: 'set', payload: {name: 'maxim', age: 21}});
    store.dispatch({type: 'del', payload: {test: 'maxim'}});
    console.log(store.state)
}
