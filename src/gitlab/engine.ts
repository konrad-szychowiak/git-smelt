import axios, { AxiosResponse } from 'axios';

export async function engine(requestProps: object) {
  const response = await axios(requestProps) as unknown as AxiosResponse<object[]>;
  const { data } = response;
  return data;
}

export class GitLabEngine {
    private _url: URL;

    get url(): URL {
      return this._url;
    }

    constructor(url) {
      this._url = url;
    }

    async request(method, url) {
      const response = await axios({
        method,
        url,
      }) as unknown as AxiosResponse<object[]>;
      const { data } = response;
      return data;
    }

    async get(endpoint: string | URL) {
      const method = 'get';
      const url = `${this.url}${endpoint}`;
      return this.request(method, url);
    }
}
