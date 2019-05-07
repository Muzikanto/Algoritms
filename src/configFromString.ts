import {denormalizeConfig} from "./configToString";
import {IObject} from "./typings";

const config = {
    parametrs: {
        db: {
            user: 'username',
            host: '10.10.10.10',
        },
        application: 'MyApplication',
        debug: true,
    },
    services: {
        profile: 'App/Profile/Module',
        main: 'App/Main/Module',
    },
    option: {
        with: {
            any: {
                nesting: {
                    level: 'OK'
                }
            }
        }
    }
};

function configFromString(data: string[]) {
    const result: IObject = {};

    for (const v of data) {
        const [path, value] = v.split('=');
        const pathItems = path.split('.');
        let current = result;

        for (let i = 0; i < pathItems.length - 1; i++) {
            if (!current[pathItems[i]]) {
                current[pathItems[i]] = {};
                current = current[pathItems[i]];
            }
        }

        current[pathItems[pathItems.length - 1]] = value;
    }

    return result;
}

export function testNormalizeConfig() {
    console.log(configFromString(denormalizeConfig(config)));
}