import { BaseSmelter } from '../../baseSmelter';
import { GitLabEngine } from '../engine';
import { ResourceNotOnInstanceError } from '../../errors/resourceNotOnInstance';
import { WIPError } from '../../errors/wip';

export function apiURLFromInstanceName(instanceName) {
  return `https://${instanceName}/api/v4`;
}

export function encodeURIFromPath(...pathElements) {
  const fullPath = pathElements.join('/');
  return encodeURIComponent(fullPath);
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

  resourceError(resourceDescription: string) {
    return ResourceNotOnInstanceError.fromEngine(this.engine as GitLabEngine, resourceDescription);
  }

  wipError(resourceDescription: string) {
    return new WIPError(resourceDescription, this);
  }

  async getUser(username) {
    const endpoint = `/users?username=${username}`;
    return this.engine.get(endpoint);
  }

  async getRepoByID(repoID: number | string) {
    const endpoint = `/projects/${repoID}`;
    return this.engine.get(endpoint);
  }

  async getRepoByName(owner: string, repo: string) {
    const repoURI = encodeURIFromPath(owner, repo);
    return this.getRepoByID(repoURI);
  }
}
