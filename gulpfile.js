const { task } = require('gulp');
const del = require('del');

task('clean', () => del('lib/**', { force: true }));
