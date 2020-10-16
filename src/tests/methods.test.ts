import { GitHubSmelter } from '../github/smelter';
import { GitLabSmelter } from '../gitlab/smelter';

const AVAILABLE_SMELTERS = [
  new GitHubSmelter(),
  new GitLabSmelter(),
];

const GET_USER = 'getUser';
test(`Smelters have ${GET_USER} method`, () => {
  AVAILABLE_SMELTERS.forEach((smelter) => {
    expect(smelter).toHaveProperty(GET_USER);
  });
});

const GET_REPO_BY_ID = 'getRepoByID';
test(`Smelters have ${GET_REPO_BY_ID} method`, () => {
  AVAILABLE_SMELTERS.forEach((smelter) => {
    expect(smelter).toHaveProperty(GET_REPO_BY_ID);
  });
});

const GET_REPO_BY_NAME = 'getRepoByName';
test(`Smelters have ${GET_REPO_BY_NAME} method`, () => {
  AVAILABLE_SMELTERS.forEach((smelter) => {
    expect(smelter).toHaveProperty(GET_REPO_BY_NAME);
  });
});

const GET_GROUP_BY_ID = 'getGroupByID';
test(`Smelters have ${GET_REPO_BY_NAME} method`, () => {
  AVAILABLE_SMELTERS.forEach((smelter) => {
    expect(smelter).toHaveProperty(GET_GROUP_BY_ID);
  });
});

const GET_GROUP_BY_NAME = 'getGroupByName';
test(`Smelters have ${GET_REPO_BY_NAME} method`, () => {
  AVAILABLE_SMELTERS.forEach((smelter) => {
    expect(smelter).toHaveProperty(GET_GROUP_BY_NAME);
  });
});
