import { BlockStatement, IfStatement } from "acorn";
import { Environment } from "../environment";
import Interpret from "..";

export default function (node: IfStatement, env: Environment) {
    if(Interpret(node.test, env)){
        return Interpret(node.consequent, new Environment(env))
    } else {
        if(node.alternate)
        return Interpret(node.alternate, new Environment(env))
        return undefined
    }
}