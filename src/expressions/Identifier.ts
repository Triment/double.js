import { Identifier } from "acorn";
import { Environment } from "../environment";

export default function(node: Identifier, env: Environment){
    return env.lookUp(node.name)
}