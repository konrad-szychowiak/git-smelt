import { Octokit } from '@octokit/core';
import { GitLabEngine } from '../gitlab/engine';

type EngineLike = GitLabEngine | Octokit;

class BaseSmelter {
    private _engine: EngineLike;

    get engine(): EngineLike {
      return this._engine;
    }

    constructor(engine: EngineLike) {
      this._engine = engine;
    }
}

export default BaseSmelter;
