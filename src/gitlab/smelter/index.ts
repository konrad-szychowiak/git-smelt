import { BaseSmelter } from '../../baseSmelter';
import { GitLabEngine } from '../engine';
import { ResourceNotOnInstanceError } from '../../errors/resourceNotOnInstance';
import { WIPError } from '../../errors/wip';

export function apiURLFromInstanceName(instanceName) {
  return `https://${instanceName}/api/v4`;
}

export class GitLabSmelter extends BaseSmelter {
  static fromURL(url: string): GitLabSmelter {
    const engine = GitLabEngine.fromURL(url);
    return new GitLabSmelter(engine);
  }

  static fromInstanceName(instanceName: string): GitLabSmelter {
    const instanceURL = apiURLFromInstanceName(instanceName);
    return GitLabSmelter.fromURL(instanceURL);
  }

  /**
     * Return an error, if given resource does not exist
     * on the gitlab instance targeted by this smelter.
     * @param {string} resourceDescription description of the requested resource.
     * @private
     */
  resourceError(resourceDescription: string) {
    return ResourceNotOnInstanceError.fromEngine(this.engine as GitLabEngine, resourceDescription);
  }

  wipError(resourceDescription: string) {
    return new WIPError(resourceDescription, this);
  }

  /**
     * GET data about a given user
     * from GitLab API.
     * @param {string} username GitLab username.
     */
  async getUser(username) {
    const endpoint = `/users?username=${username}`;
    const [data] = await this.engine.get(endpoint);
    if (data !== {}) return data;
    throw this.resourceError(`user with name: ${username}`);
  }

  /**
     * GET data about a project
     * from GitLab API
     * based on the project's ID.
     * @param {string} repoID id of the gitlab project you are looking for
     */
  async getRepoByID(repoID: string) {
    const endpoint = `/projects/${repoID}`;
    const [data] = await this.engine.get(endpoint);
    if (data) return data;
    // TODO: Fix that
    throw this.resourceError(`repo with id: ${repoID}`);
  }

  /**
     * GET data about a project
     * from GitLab API
     * based on the project's ID.
     * @param {string} repoID id of the gitlab project you are looking for
     */
  // async
  getRepoByName(/* owner: string, repo: string */) {
    // TODO: find how to get repo by path from gitlab API
    throw this.wipError('method: getRepoByName');
  }
}
