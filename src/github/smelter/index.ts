import { Octokit } from '@octokit/core';
import { AxiosResponse } from 'axios';
import { BaseSmelter } from '../../baseSmelter';

export class GitHubSmelter extends BaseSmelter {
  constructor(auth?: string) {
    super(new Octokit());
    this.setClient(auth && { auth });
  }

    private _client: Octokit;

    get client() {
      return this._client;
    }

    async getUser(username) {
      const res = await this.client.request('GET /users/:username', {
        username,
      });
      const { data } = res as unknown as AxiosResponse<object[]>;
      return data;
    }

    async getRepoByID(repoID: string) {
      // TODO: assure id is numeric
      const res = await this.client.request('GET /repositories/:id', { id: repoID });
      const { data } = res as unknown as AxiosResponse<object[]>;
      return data;
    }

    async getRepoByName(owner: string, repo: string) {
      const res = await this.client.request('GET /repos/{owner}/{repo}', {
        owner,
        repo,
      });
      const { data } = res as unknown as AxiosResponse<object[]>;
      return data;
    }

    private setClient(options: object) {
      this._client = new Octokit(options);
    }
}
