import {joinArrays} from "./joinArrays";
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

export function denormalizeConfig(data: IObject) {
    return joinArrays(configToSting(data));
}

function configToSting(val: any, str: string = ''): any {
    if (typeof val === 'object') {
        return Object.keys(val).map(key => configToSting(val[key], str + (str ? '.' : '') + key));
    } else {
        return str + '=' + val;
    }
}

export function testdenormalizeConfig() {
    console.log(denormalizeConfig(config));
}
