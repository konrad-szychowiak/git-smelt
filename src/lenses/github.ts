import { Octokit } from '@octokit/core';
import Lens from './lens';

export class GitHubLens extends Lens {
    private client: Octokit;

    constructor(user?: string, auth?: string) {
      super();
      this.client = new Octokit({ auth });
    }

    getUser = async function (username) {
      const { data } = await this.client.request('GET /users/{username}', {
        username,
      });
      return data;
    }
}

function github() {
  return new GitHubLens();
}

export default github;
