import Interpret from "..";
export default function (node, env) {
    for (let i = 0; i < node.body.length; i++) {
        if (i == node.body.length - 1)
            return Interpret(node.body[i], env);
        Interpret(node.body[i], env);
    }
}
