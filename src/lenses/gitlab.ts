import axios, { AxiosResponse } from 'axios';
import Lens from './lens';

async function request(requestProps: object) {
  const response = await axios(requestProps) as unknown as AxiosResponse<object[]>;
  const { data } = response;
  return data;
}

class GitLabLens extends Lens {
    private url: string;

    constructor(instance: string = 'gitlab.com') {
      super();
      this.url = `https://${instance}/api/v4`;
    }

    getUser = async function (username) {
      const url = `${this.url}/users?username=${username}`;

      const [data] = await request({
        method: 'get',
        url,
      });

      if (data) return data;
      throw `A user with username: ${username} does not exist in gitlab instance: ${this.url}`;
    }

    getUserRepos = async function (userID) {
      const url = `${this.url}/users/${userID}/projects`;

      const [data] = await request({
        method: 'get',
        url,
      });

      if (data) return data;
      throw `User with id: ${userID} does not exist in gitlab instance: ${this.url}`;
    }

    getRepo = async function (repoID) {
      const url = `${this.url}/projects/${repoID}`;

      const [data] = await request({
        method: 'get',
        url,
      });

      if (data) return data;
      throw `Project with id: ${repoID} does not exist in gitlab instance: ${this.url}`;
    }
}

function gitlab() {
  return new GitLabLens();
}

export default gitlab;
