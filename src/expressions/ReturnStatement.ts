import { ReturnStatement, WithStatement } from "acorn";
import { Environment } from "../environment";
import Interpret from "..";

export default function(node: ReturnStatement, env: Environment){
    if(node.argument === undefined) return undefined;
    if(node.argument === null) return null;
    return Interpret(node.argument, env)
}