//中断实现

export class BlockInterruption {
    private type
    public value
    private label?: string;//break语句的label
    constructor(type: string, value?: string) {
        this.type = type
        this.value = value
    }
    getType() {
        return this.type
    }
    setLabel(label: string) {
        this.label = label
    }
    getLabel() {
        return this.label
    }
}