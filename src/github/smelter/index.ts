import { AxiosResponse } from 'axios';
import { BaseSmelter } from '../../baseSmelter';
import { GitHubEngine } from '../engine';

export class GitHubSmelter extends BaseSmelter {
  constructor(auth?: string) {
    super(new GitHubEngine(auth && { auth }));
  }

  async getUser(username) {
    const res = await this.engine.request('GET /users/:username', {
      username,
    });
    const { data } = res as unknown as AxiosResponse<object[]>;
    return data;
  }

  async getRepoByID(repoID: string) {
    // TODO: assure id is numeric
    return this.engine.request('GET /repositories/:id', { id: repoID });
  }

  async getRepoByName(owner: string, repo: string) {
    return this.engine.request('GET /repos/{owner}/{repo}', {
      owner,
      repo,
    });
  }

  async getGroupByID(groupID: number) {
    return this.engine.request('GET /orgs/:id', { id: groupID });
  }

  async getGroupByName(groupName: string) {
    return this.engine.request('GET /orgs/{org}', {
      org: groupName,
    });
  }
}
