import { Octokit } from '@octokit/core';
import { AxiosResponse } from 'axios';
import { BaseSmelter } from '../../baseSmelter';
import { WIPError } from '../../errors';

export class GitHubSmelter extends BaseSmelter {
  constructor(auth?: string) {
    super(new Octokit());
    this.setClient(auth && { auth });
  }

    private _client: Octokit;

    get client() {
      return this._client;
    }

    /**
     * GET data about a given user
     * from GitHub API.
     * @param {string} username GitHub login.
     */
    async getUser(username) {
      const res = await this.client.request('GET /users/:username', {
        username,
      });
      const { data } = res as unknown as AxiosResponse<object[]>;
      return data;
    }

    /**
     * GET data about a project
     * from GitLab API
     * based on the project's ID.
     * @param {string} repoID id of the gitlab project you are looking for
     */
    async getRepoByID(repoID: string) {
      throw new WIPError(repoID, this);
    }

    /**
     * GET data about a given repo
     * from GitHub API.
     * @param {string} owner login of the repo's owner.
     * @param {string} repo name of the repo.
     */
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
