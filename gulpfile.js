const { task, src, dest } = require('gulp');
const ts = require('gulp-typescript');

task('ts', () => src('src/**/*.ts')
  .pipe(ts())
  .pipe(dest('lib')));
