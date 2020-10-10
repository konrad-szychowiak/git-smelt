import { GitLabSmelter } from './smelter';

/**
 * Returns GitLab's smelter for requesting data from the API.
 */
export function gitlab(gitlabInstance: string = 'gitlab.com'): GitLabSmelter {
  return GitLabSmelter.fromInstanceName(gitlabInstance);
}

export { GitLabSmelter };
