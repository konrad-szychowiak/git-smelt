import { gitlab } from '../index';
import { ResourceNotOnInstanceError, WIPError } from '../../errors';

describe('GitLabSmelter should be able to throw an error when...', () => {
  const smelter = gitlab();

  test('resources are not found', () => {
    expect(smelter.resourceError('')).toBeInstanceOf(ResourceNotOnInstanceError);
  });

  test('method is not implemented yet', () => {
    expect(smelter.wipError('')).toBeInstanceOf(WIPError);
  });
});
