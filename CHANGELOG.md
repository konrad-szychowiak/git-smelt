# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] – 2020-10-??
### Changed
- Increased code coverage with Jest tests.
- Reduced compiled library size via bundling (with Rollup). 



## [0.2.1] – 2020-10-10
### Added
- Testing with Jest.
- Custom error types: `ResourceNotOnInstanceError` and `WIPError` (second is a draft).

### Changed
- Smelter API:
  + `getRepo` for git**hub** is now `getRepoByName` to better describe its functionality
  + `getRepo` for git**lab** is now `getRepoByID` to better describe its functionality
  + _**note**: opposite methods in smelters will throw `WIPError`_
   


## [0.2.0] - 2020-10-07
### Added
- Smelter API: `getRepo` for github and gitlab.
- TypeDoc for creating documentation.



## [0.1.0] - 2020-10-07
### Added
- Basic smelters, including `GitHubSmelter` and `GitLabSmelter`.
- Smelter API: `getUser` for github and gitlab.



[Unreleased]: https://github.com/konrad-szychowiak/git-smelt/
[0.2.1]: https://github.com/konrad-szychowiak/git-smelt/releases/tag/v0.2.1
[0.2.0]: https://github.com/konrad-szychowiak/git-smelt/releases/tag/v0.2.0
[0.1.0]: https://github.com/konrad-szychowiak/git-smelt/releases/tag/v0.1.0
