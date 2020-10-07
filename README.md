# git-smelt
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

Smelters are what you use with `git-smelt` to API's.
Currently, you can access some of the GutHub's and GitLab's API endpoints, with:

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

## Authors

+ [@konrad-szychowiak] main creator

## License

+ [MPL2]

[MPL2]: ./LICENSE
[@konrad-szychowiak]: https://github.com/konrad-szychowiak
