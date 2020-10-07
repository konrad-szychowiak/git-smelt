# git-smelt
![npm (tag)](https://img.shields.io/npm/v/git-smelt/latest?style=flat-square)
![NPM](https://img.shields.io/npm/l/git-smelt?style=flat-square)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/konrad-szychowiak/git-smelt?style=flat-square)
![npm type definitions](https://img.shields.io/npm/types/git-smelt?style=flat-square)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/git-smelt?style=flat-square)

🚧 A NPM package, that provides unified access to the APIs of different git hosting providers.

## Installation and Usage

### Installation
One of the following:
```shell script
npm install git-smelt
yarn add git-smelt
```

### CommonJS
```js
const smelt = require('git-smelt');
smelt.github()
// or
const { github } = require('git-smelt');
github()
```

### ES6+ / TypeScript
```ts
import { github } from 'git-smelt';
github()
```

## Smelters

**Smelters** are the interface to providers' APIs.
This is how we unify the access points to data.

> **note**: Even though the access points/methods on the smelters are unified
> there are differences in arguments you need to pass to the method.
>
> This is due to different designs in providers' APIs.
> We are currently looking for acceptable solutions to this problem.

Currently, you can access some of the **GitHub**'s and **GitLab**'s API endpoints, with:

+ **`GitHubSmelter`**/`github()` for GitHub v3 REST API
+ **`GitLabSmelter`**/`gitlab()` for GitLab v4 REST API

### `getUser`

Fetches info about a user.

```js
github().getUser('username')
  // .then()
  // .catch()
gitlab().getUser('username')
  // .then()
  // .catch()
```

### `getRepo`

Fetches info about:
+ (`github`) a repository
+ (`gitlab`) a project

```ts
github().getRepo('konrad-szychowiak', 'git-smelt')
  // .then()
  // .catch()
gitlab().getRepo('some ID' as number)
  // .then()
  // .catch()
```

## [Changelog]

## API Documentation

> 🚧 Detailed API docs are in progress. 
>
> You can download https://github.com/konrad-szychowiak/git-smelt/settings
> install the deps and run `gulp docs` to get `docs/` folder with html docs from TypeDoc. 

## Authors

+ [@konrad-szychowiak] main creator

## License

+ [MPL-2.0]

[MPL-2.0]: ./LICENSE
[Changelog]: ./CHANGELOG.md
[@konrad-szychowiak]: https://github.com/konrad-szychowiak
