import { GitLabEngine } from '../gitlab/engine';

export class ResourceNotOnInstanceError extends Error {
  constructor(instanceURL: string, resource: string) {
    super(`The resource: [${resource}] does not exist on the instance: [${instanceURL}]`);
  }

  static fromEngine(engine: GitLabEngine, resource: string) {
    const instanceURL = engine.url;
    return new ResourceNotOnInstanceError(instanceURL, resource);
  }
}
