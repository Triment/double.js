import { assert } from 'chai';
import Interpret from '..';
import { Environment } from '../environment';
import { parse } from 'acorn';

describe('Literal Test', () => {
  it('should equal 100', () => {
    const env = new Environment(null);
    assert.equal(Interpret(parse('{100}', { ecmaVersion: 'latest' }), env), 100);
  });
});