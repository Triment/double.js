export class Environment {
    constructor(parent) {
        this.parent = parent;
        this.scope = {};
    }
    assign(identifier, value) {
        this.scope[identifier] = value;
        return this.scope[identifier];
    }
    update(identifier, newValue) {
        let env = this;
        while (env) {
            let value = env.scope[identifier];
            if (value === undefined) {
                env = env.parent;
            }
            else {
                env.scope[identifier] = newValue;
                return;
            }
        }
        throw (`${identifier} 未初始化`);
    }
    lookUp(identifier) {
        let env = this;
        while (env) {
            let value = env.scope[identifier];
            if (value === undefined) {
                env = env.parent;
            }
            else {
                return value;
            }
        }
        throw (`${identifier} 未初始化`);
    }
}
