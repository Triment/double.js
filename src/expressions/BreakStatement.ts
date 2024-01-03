import { BreakStatement } from "acorn";
import { Environment } from "../environment";
import Interpret from "..";
import { BlockInterruption } from "../Interrupt";

export default function (node: BreakStatement, env: Environment) {
    let breaker = new BlockInterruption('break')
    if (node.label) breaker.setLabel(node.label.name)
    return breaker
}