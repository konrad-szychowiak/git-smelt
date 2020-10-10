import { MESSAGE_PROPERTY } from './index.test';
import { WIPError } from './wip';

describe('WIPError', () => {
  const expected = "[foo] isn't accessible from [function] yet!";
  const testedResource = 'foo';
  const fromConstructor = new WIPError(testedResource, () => {});

  test('has a good message', () => {
    expect(fromConstructor).toHaveProperty(MESSAGE_PROPERTY, expected);
  });
});
