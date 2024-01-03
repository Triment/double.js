import { LabeledStatement } from "acorn";
import { Environment } from "../environment";

export default function(node: LabeledStatement, env: Environment){
    return Error("暂不支持labled")
}