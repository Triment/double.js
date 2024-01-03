import { WithStatement } from "acorn";
import { Environment } from "../environment";
import Interpret from "..";

export default function(node: WithStatement, env: Environment){
    //Interpret(node.object, env)
    //return Interpret(node.body, env)
    return Error("暂不支持with")
}