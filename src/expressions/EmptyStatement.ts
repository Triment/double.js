import { EmptyStatement } from "acorn";
import { Environment } from "../environment";
import Interpret from "..";

export default function (node: EmptyStatement, env: Environment) {
    return undefined
}