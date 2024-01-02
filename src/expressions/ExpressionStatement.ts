import { AnyNode, ExpressionStatement } from "acorn";
import { Environment } from "../environment";
import Interpret from "..";

export default function(node: ExpressionStatement, env: Environment){
    return Interpret(node.expression, env)
}