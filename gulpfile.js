const {
  task, src, dest, series,
} = require('gulp');
const ts = require('gulp-typescript');
const del = require('del');

task('clean', () => del('lib/**', { force: true }));

task('build', () => src(['src/**/*.ts', '!src/**/*.test.ts', '!src/**/__mock__'])
  .pipe(ts({
    target: 'es5',
    module: 'commonjs',
    declaration: true,
    experimentalDecorators: true,
  }))
  .pipe(dest('lib')));

exports.default = series('clean', 'build');
