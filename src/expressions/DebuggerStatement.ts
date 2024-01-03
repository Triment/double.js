import { DebuggerStatement } from "acorn";
import { Environment } from "../environment";
import Interpret from "..";

export default function (node: DebuggerStatement, env: Environment) {
    console.log(env)
}