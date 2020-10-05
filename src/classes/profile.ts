import UserLike from './base';

class Profile extends UserLike {
  private _avatar: URL;

  get avatar(): URL {
    return this._avatar;
  }

  set avatar(value: URL) {
    this._avatar = value;
  }

  private _web: URL;

  get web(): URL {
    return this._web;
  }

  set web(value: URL) {
    this._web = value;
  }

  private _api: URL;

  get api(): URL {
    return this._api;
  }

  set api(value: URL) {
    this._api = value;
  }

  constructor(name, id, avatar, web, api) {
    super(name, id);
    this._avatar = avatar;
    this._web = web;
    this._api = api;
  }
}

export default Profile;
