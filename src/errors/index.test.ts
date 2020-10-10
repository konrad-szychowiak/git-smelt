import { wrapErrorField } from './commons';

export const MESSAGE_PROPERTY = 'message';

test('Message field is wrapped correctly.', () => {
  const wrappedField = wrapErrorField('field');
  expect(wrappedField).toBe('[field]');
});
