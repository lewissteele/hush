import hush from '../src/index';
import { expect } from 'chai';

describe('hush function test', () => {
  it('should return true', () => {
    const actual = hush();
    expect(actual).to.be.a('boolean');
    expect(actual).to.equal(true);
 });
});
