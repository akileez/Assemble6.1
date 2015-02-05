var assemble    = require('assemble');
var extname     = require('gulp-extname');

assemble.option('assets', 'assets');
assemble.option('layoutDelims', ['{{=', '}}']);
assemble.layouts('layouts/*.hbs');

assemble.task('site1', function () {
  return assemble.src('templates/*.hbs')
    .pipe(extname())
    .pipe(assemble.dest('build'));
});

assemble.task('default', ['site1']);
