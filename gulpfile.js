const {
  task, src, dest, series,
} = require('gulp');
const ts = require('gulp-typescript');
const typedoc = require('gulp-typedoc');
const del = require('del');

task('clean', () => del('dist/**', { force: true }));

task('build', () => src(['src/**/*.ts', '!src/**/*.test.ts'])
  .pipe(ts({
    target: 'es5',
    module: 'commonjs',
    declaration: true,
    experimentalDecorators: true,
  }))
  .pipe(dest('lib')));

exports.default = series('clean', 'build');

task('doc', () => src(['src/**/*.ts'])
  .pipe(typedoc({
    module: 'commonjs',
    target: 'es5',
    out: 'docs/',
    name: 'My project title',
  })));
