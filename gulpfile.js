const { task, src, dest } = require('gulp');
const ts = require('gulp-typescript');
const typedoc = require('gulp-typedoc');

task('lib', () => src('src/**/*.ts')
  .pipe(ts({
    target: 'es5',
    module: 'commonjs',
    declaration: true,
    experimentalDecorators: true,
  }))
  .pipe(dest('lib')));

task('doc', () => src(['src/**/*.ts'])
  .pipe(typedoc({
    module: 'commonjs',
    target: 'es5',
    out: 'docs/',
    name: 'My project title',
  })));
