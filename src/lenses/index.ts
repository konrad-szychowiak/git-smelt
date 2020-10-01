import Lens from './lens';
import githubCreator from './github';
import gitlabCreator from './gitlab';

export const github = githubCreator;
export const gitlab = gitlabCreator;
export const lens = () => new Lens();
