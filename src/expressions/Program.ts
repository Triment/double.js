import { Program } from "acorn";
import { Environment } from "../environment";
import Interpret from "..";

export default function(node: Program, env: Environment){
    for(let i = 0; i< node.body.length; i++ ){
        if(i== node.body.length-1)
        return Interpret(node.body[i], env);
        Interpret(node.body[i], env);
    }
}