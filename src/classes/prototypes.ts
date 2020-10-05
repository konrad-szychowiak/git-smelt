import { UserLike, IDLike } from './base';
import Profile from './profile';

type ApplicableProfilePartial = 'github' | 'gitlab';

class User extends UserLike {
  get github_profile(): Profile {
    return this._github_profile;
  }

  set github_profile(value: Profile) {
    this._github_profile = value;
  }

  get gitlab_profile(): Profile {
    return this._gitlab_profile;
  }

  set gitlab_profile(value: Profile) {
    this._gitlab_profile = value;
  }

  private _gitlab_profile: Profile;

  private _github_profile: Profile;

  profile = (which: ApplicableProfilePartial) => this[`_${which}_profile`];
}
