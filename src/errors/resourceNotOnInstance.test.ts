import { GitLabEngine } from '../gitlab/engine';
import { ResourceNotOnInstanceError } from './resourceNotOnInstance';
import { MESSAGE_PROPERTY } from './index.test';

describe('ResourceNotOnInstanceError', () => {
  const fromConstructor = new ResourceNotOnInstanceError('world', 'hello');
  const expected = 'The resource: [hello] does not exist on the instance: [world]';

  test('has a good message when created by constructor', () => {
    expect(fromConstructor).toHaveProperty(MESSAGE_PROPERTY, expected);
  });

  test('has a good message when created from GitLab API requests engine', () => {
    const engine = GitLabEngine.fromURL('world');
    const errorFromEngine = ResourceNotOnInstanceError.fromEngine(engine, 'hello');
    expect(errorFromEngine).toHaveProperty(MESSAGE_PROPERTY, expected);
    expect(errorFromEngine).toMatchObject(fromConstructor);
  });
});
