const { task, src, dest } = require('gulp');
const ts = require('gulp-typescript');

task('ts', () => src('src/**/*.ts')
  .pipe(ts({
    target: 'es5',
    module: 'commonjs',
    declaration: true,
  }))
  .pipe(dest('lib')));
