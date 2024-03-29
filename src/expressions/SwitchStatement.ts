import { SwitchStatement } from "acorn";
import { Environment } from "../environment";
import Interpret from "..";

export default function (node: SwitchStatement, env: Environment) {
    let switchEnv = new Environment(env);
    let discriminant = Interpret(node.discriminant, switchEnv);
    let matched = false
    for (const c of node.cases) {
        if (!matched) {
            if (c.test)
                matched = Interpret(c.test, switchEnv) === discriminant;
            else matched = true;//空条件默认匹配
        }
        if (matched) {
            let caseEnv = new Environment(switchEnv)
            for (let i = 0; i < c.consequent.length; i++) {
                //difference between Block and other
                let val = Interpret(c.consequent[i], c.consequent[i].type === 'BlockStatement' ? caseEnv : switchEnv);
                if (i === c.consequent.length - 1) return val;
            }
        }
    }
}