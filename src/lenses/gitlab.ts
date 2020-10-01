import axios from 'axios';
import Lens from './lens';

class GitLabLens extends Lens {
    private url: string;

    constructor(instance: string = 'gitlab.com') {
      super();
      this.url = `https://${instance}/api/v4`;
    }

    getUser = async function (username) {
      const url = `${this.url}/users?username=${username}`;

      const { data } = await axios({
        method: 'get',
        url,
      });

      console.log(data);

      const [user] = data;

      console.log(user);

      return user;
    }
}

function gitlab() {
  return new GitLabLens();
}

export default gitlab;
