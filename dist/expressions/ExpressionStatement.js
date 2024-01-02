import Interpret from "..";
export default function (node, env) {
    return Interpret(node.expression, env);
}
