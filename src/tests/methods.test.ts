import { GitHubSmelter } from '../github/smelter';
import { GitLabSmelter } from '../gitlab/smelter';

const AVALIABLE_SMELTERS = [
  new GitHubSmelter(),
  new GitLabSmelter(),
];

const GET_USER = 'getUser';
test(`Smelters have ${GET_USER} method`, () => {
  AVALIABLE_SMELTERS.forEach((smelter) => {
    expect(smelter).toHaveProperty(GET_USER);
  });
});

const GET_REPO_BY_ID = 'getRepoByID';
test(`Smelters have ${GET_REPO_BY_ID} method`, () => {
  AVALIABLE_SMELTERS.forEach((smelter) => {
    expect(smelter).toHaveProperty(GET_REPO_BY_ID);
  });
});

const GET_REPO_BY_NAME = 'getRepoByName';
test(`Smelters have ${GET_REPO_BY_NAME} method`, () => {
  AVALIABLE_SMELTERS.forEach((smelter) => {
    expect(smelter).toHaveProperty(GET_REPO_BY_NAME);
  });
});
