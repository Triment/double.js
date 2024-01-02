import { AnyNode } from 'acorn';
import Literal from './expressions/Literal';
import { Environment } from './environment';
import Program from './expressions/Program';
import ExpressionStatement from './expressions/ExpressionStatement';


export default function Interpret(node: AnyNode, environment: Environment): any {
    if(node.type === 'ExpressionStatement'){
        return ExpressionStatement(node, environment);
    }
    if(node.type === 'Literal'){
        return Literal(node, environment);
    }
    if(node.type === 'Program'){
        return Program(node, environment);
    }

}