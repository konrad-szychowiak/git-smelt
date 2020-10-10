import { gitlab } from '../index';

const USERNAME = 'konrad-szychowiak';
const SMELTER = gitlab();

describe('getUser', () => {
  test('', () => {
    expect(SMELTER.getUser(USERNAME)).resolves.not.toThrowError();
    expect(SMELTER.getUser(USERNAME)).resolves.toHaveProperty('username', USERNAME);
  });

  test('fail', () => {
    expect(SMELTER.getUser('')).resolves.toThrowError();
  });
});
