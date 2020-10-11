# git-smelt
![npm (tag)](https://img.shields.io/npm/v/git-smelt/latest?style=flat-square)
![NPM](https://img.shields.io/npm/l/git-smelt?style=flat-square)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/konrad-szychowiak/git-smelt?style=flat-square)
![npm type definitions](https://img.shields.io/npm/types/git-smelt?style=flat-square)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/git-smelt?style=flat-square)

> 🚧 A NPM package, that provides unified access to the APIs of different git hosting providers.

+ [Why?](#-why)
+ [Compatibility](#-compatibility) with JavaScript module models
+ [Installation](#-installation-and-usage) and usage
+ [Smelters](#-smelters)—the core of the library
+ [Smelters API](#-api-documentation)—documentation of smelters and request methods
+ [Authors](#-contributors)
+ [Changelog]
+ [License](#-license)

## ❓ Why?

There are many platforms, that provide hosting of git repos.
Many (probably all) are giving uss their APIs to read and write data
about those repos.
It's problematic, though, because all of those APIs work a bit differently.

`git-smelt` is designed to provide you one API for JavaScript applications,
with simple objects corresponding to the providers.

Every provider-specific object (we call them _smelters_) provides
readable methods that you can use to operate on provider's API, 
**without** learning endpoints or other provider-specific requirements.

**NOTE 0:** This is a work in progress.
Very much.
We will be happy to hear any feedback you might want to provide.
At the same time, please, do not expect too much from the current version.
It will get better.  

**NOTE 1:** Compatibility with multiple APIs means, that some methods will have long names
and there can be more than one way to access the data you want.
Without discriminating any API, we cannot eliminate this redundancy,
because some ways to access thing are faster or more direct on some API than on others.  

## 🤝 Compatibility

The library provides:
+ a **CommonJS** module: `lib/index.js`
+ an **ES6**+ module: `lib/index.mjs`
+ TypeScript **type declarations**: `lib/index.d.ts`

so it should cover most basic use-cases.

If there is something you lack for `git-smelt` to work for you—by all means—reach out
and let us know what you need. (GitHub's [issues] are most likely the fastest way.) 

## 📥 Installation and Usage

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

## 🔥 Smelters

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

## 🗂️ API Documentation

> 🚧 Detailed API docs are in progress. 
>
> You can download https://github.com/konrad-szychowiak/git-smelt/settings
> install the deps and run `gulp docs` to get `docs/` folder with html docs from TypeDoc. 

### Users
#### `getUser()`
Fetches info about a user.

```js
github().getUser('username')
  // .then()
  // .catch()
gitlab().getUser('username')
  // .then()
  // .catch()
```

### Repos
Fetch info about:
+ (`github`) a repository
+ (`gitlab`) a project

#### `getRepoByID()`
```ts
gitlab().getRepoByID(id)
  // .then()
  // .catch()
```
 
#### `getRepoByName()`
Requires the name of the repository, including its owner.
```ts
github().getRepoByName('konrad-szychowiak', 'git-smelt')
  // .then()
  // .catch()
```


## ⏲️ [Changelog]

## ✍️ Contributors
+ **[konrad-szychowiak]** [@szychowiakk] main creator
+ **[srflp]** 

## ⚖️ License
+ [MPL-2.0]

[issues]: https://github.com/konrad-szychowiak/git-smelt/issues
[MPL-2.0]: ./LICENSE
[Changelog]: ./CHANGELOG.md
[konrad-szychowiak]: https://github.com/konrad-szychowiak
[@szychowiakk]: https://twitter.com/szychowiakk
[srflp]: https://github.com/srflp
