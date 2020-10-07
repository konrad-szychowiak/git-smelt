import BaseSmelter from '../prototypes/baseSmelter';
import { engine, GitLabEngine } from './engine';

const useEngine = (instance) => {
  const instanceAPI = `https://${instance}/api/v4`;
  return new GitLabEngine(instanceAPI);
};

class GitLabSmelter extends BaseSmelter {
    private url: string;

    constructor(instance: string = 'gitlab.com') {
      super(useEngine(instance));
    }

    /**
     * GET data about a given user
     * from GitLab API.
     * @param {string} username GitLab username.
     */
    async getUser(username) {
      const endpoint = `/users?username=${username}`;
      const [data] = await this.engine.get(endpoint);
      return data;
    }

    /**
     * GET data about a project
     * from GitLab API.
     * @param {string} repoID id of the gitlab project you are looking for
     */
    async getRepo(repoID: string) {
      const url = `${this.url}/projects/${repoID}`;

      const [data] = await engine({
        method: 'get',
        url,
      });

      if (data) return data;
      throw `Project with id: ${repoID} does not exist in gitlab instance: ${this.url}`;
    }
}

/**
 * Returns GitLab's smelter for requesting data from the API.
 */
export function gitlab(): GitLabSmelter {
  return new GitLabSmelter();
}
