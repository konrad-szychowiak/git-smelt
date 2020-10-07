import { Octokit } from '@octokit/core';
import { AxiosResponse } from 'axios';
import BaseSmelter from '../prototypes/baseSmelter';

export class GitHubSmelter extends BaseSmelter {
    private client: Octokit;

    constructor(user?: string, auth?: string) {
      super(new Octokit({ auth }));
    }

    async getUser(username) {
      const res = await this.engine.request('GET /users/{username}', {
        username,
      });
      const { data } = res as unknown as AxiosResponse<object[]>;
      return data;
    }

    async getRepo(owner: string, repo: string) {
      const res = await this.engine.request('GET /repos/{owner}/{repo}', {
        owner,
        repo,
      });
      const { data } = res as unknown as AxiosResponse<object[]>;
      return data;
    }
}

export function github() {
  return new GitHubSmelter();
}
