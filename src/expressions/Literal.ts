import { AnyNode, Literal } from "acorn";
import { Environment } from "../environment";

export default function(node: Literal, env: Environment){
    return node.value
}