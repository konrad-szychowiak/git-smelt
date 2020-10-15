import { Octokit } from '@octokit/core';
import { AxiosResponse } from 'axios';

export class GitHubEngine {
    private octokit: Octokit;

    constructor(opts) {
      this.octokit = new Octokit(opts);
    }

    async request(endpoint, opts) {
      const response = await this.octokit.request(endpoint, opts);
      const { data } = response as unknown as AxiosResponse<object[]>;
      return data;
    }
}
