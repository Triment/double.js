import { AnyNode } from 'acorn';
import Literal from './expressions/Literal';
import { Environment } from './environment';
import Program from './expressions/Program';
import ExpressionStatement from './expressions/ExpressionStatement';
import BlockStatement from './expressions/BlockStatement';
import Identifier from './expressions/Identifier';
import BreakStatement from './expressions/BreakStatement';
import DebuggerStatement from './expressions/DebuggerStatement';
import EmptyStatement from './expressions/EmptyStatement';
import IfStatement from './expressions/IfStatement';
import LabeledStatement from './expressions/LabeledStatement';
import ReturnStatement from './expressions/ReturnStatement';
import SwitchStatement from './expressions/SwitchStatement';
import WithStatement from './expressions/WithStatement';


export default function Interpret(node: AnyNode, environment: Environment): any {
    if(node.type === 'BlockStatement'){
        return BlockStatement(node, environment);
    }
    if(node.type === 'BreakStatement'){
        return BreakStatement(node, environment);
    }
    if(node.type === 'DebuggerStatement'){
        return DebuggerStatement(node, environment);
    }
    if(node.type === 'EmptyStatement'){
        return EmptyStatement(node, environment);
    }
    if(node.type === 'ExpressionStatement'){
        return ExpressionStatement(node, environment);
    }
    if(node.type === 'Identifier'){
        return Identifier(node, environment);
    }
    if(node.type === 'IfStatement'){
        return IfStatement(node, environment);
    }
    if(node.type === 'LabeledStatement'){
        return LabeledStatement(node, environment);
    }
    if(node.type === 'Literal'){
        return Literal(node, environment);
    }
    if(node.type === 'Program'){
        return Program(node, environment);
    }
    if(node.type === 'ReturnStatement'){
        return ReturnStatement(node, environment);
    }
    if(node.type === 'SwitchStatement'){
        return SwitchStatement(node, environment);
    }
    if(node.type === 'WithStatement'){
        return WithStatement(node, environment);
    }

}