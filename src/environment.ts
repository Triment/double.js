export class Environment {
    private parent: Environment | null
    private scope: Record<string, any>
    constructor(parent: Environment | null){
        this.parent = parent;
        this.scope = {};
    }
    public assign(identifier: string, value: any) {
        this.scope[identifier] = value
        return this.scope[identifier];
    }
    public update(identifier: string, newValue: any) {
        let env: Environment | null = this;
        while(env){
            let value = env.scope[identifier]
            if(value === undefined){
                env = env.parent
            } else {
                env.scope[identifier] = newValue;
                return;
            }
        }
        throw(`${identifier} 未初始化`)
    }
    public lookUp(identifier: string): any {
        let env: Environment | null = this;
        while(env){
            let value = env.scope[identifier]
            if(value === undefined){
                env = env.parent
            } else {
                return value
            }
        }
        throw(`${identifier} 未初始化`)
    }
}