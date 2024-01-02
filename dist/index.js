import Literal from './expressions/Literal';
import Program from './expressions/Program';
import ExpressionStatement from './expressions/ExpressionStatement';
export default function Interpret(node, environment) {
    if (node.type === 'ExpressionStatement') {
        return ExpressionStatement(node, environment);
    }
    if (node.type === 'Literal') {
        return Literal(node, environment);
    }
    if (node.type === 'Program') {
        return Program(node, environment);
    }
}
