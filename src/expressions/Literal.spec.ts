import { assert } from 'chai';
import Interpret from '..';
import { Environment } from '../environment';
import { parse } from 'acorn';

describe('Literal Test', () => {
  it('should equal Literal', () => {
    const env = new Environment(null);
    assert.equal(Interpret(parse('1', { ecmaVersion: 'latest' }), env), 1);
  });
});