import { apiURLFromInstanceName, GitLabSmelter } from './index';
import { GitLabEngine } from '../engine';
import { BaseSmelter } from '../../baseSmelter';

// Addresses / URLs
const INSTANCE_ADDRESS = 'gitlab.example.com';
const API_ADDRESS = apiURLFromInstanceName(INSTANCE_ADDRESS);

// engine
const ENGINE = GitLabEngine.fromURL(API_ADDRESS);
const ENGINE_PROPERTY = 'engine';
const URL_IN_ENGINE_PROPERTY = `${ENGINE_PROPERTY}.url`;

test("Properly generate API address from GitLab instance's domain name.", () => {
  expect(API_ADDRESS).toBe(`https://${INSTANCE_ADDRESS}/api/v4`);
});

describe('Many ways to create a smelter', () => {
  const fromConstructor = new GitLabSmelter(ENGINE);
  const fromURL = GitLabSmelter.fromURL(API_ADDRESS);
  const fromInstanceName = GitLabSmelter.fromInstanceName(INSTANCE_ADDRESS);

  const allSmelters = [fromConstructor, fromInstanceName, fromURL];

  test('create the same object', () => {
    expect(fromConstructor).toMatchObject(fromURL);
    expect(fromInstanceName).toMatchObject(fromURL);
    expect(fromInstanceName).toMatchObject(fromConstructor);
  });

  test('create object with expected properties', () => {
    allSmelters.forEach((smelter) => {
      expect(smelter).toBeInstanceOf(BaseSmelter);
      expect(smelter).toBeInstanceOf(GitLabSmelter);
    });
  });

  test('create objects with valid engine', () => {
    allSmelters.forEach((smelter) => {
      expect(smelter).toHaveProperty(ENGINE_PROPERTY);
      expect(smelter).toHaveProperty(URL_IN_ENGINE_PROPERTY, API_ADDRESS);
      const engine = smelter[ENGINE_PROPERTY];
      expect(engine).toBeInstanceOf(GitLabEngine);
    });
  });
});
