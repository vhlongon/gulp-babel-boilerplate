//initialize all of our variables
var app, base, concat, directory, gulp, gutil, hostname, path, refresh, sass, uglify, imagemin, 
  browserSync, gulpSequence, shell, sourceMaps, plumber, babel, modernizr;

//load all of our dependencies
//add more here if you want to include more libraries
gulp        = require('gulp');
gutil       = require('gulp-util');
concat      = require('gulp-concat');
uglify      = require('gulp-uglify');
sass        = require('gulp-sass');
sourceMaps  = require('gulp-sourcemaps');
imagemin    = require('gulp-imagemin');
cssnext   = require('gulp-cssnext');
browserSync = require('browser-sync');
gulpSequence = require('gulp-sequence').use(gulp);
shell       = require('gulp-shell');
plumber     = require('gulp-plumber');
order     = require('gulp-order');
babel     = require('gulp-babel');
modernizr     = require('gulp-modernizr');

//load browsersync (and modernizr only on server start)
gulp.task('browserSync', ['modernizr'], function() {
  browserSync({
    port: 7777,
    server: {
      baseDir: 'app/'
    },
    options: {
      reloadDelay: 100
    },
    notify: true
  });
});


//compressing images & handle SVG files
gulp.task('images', function(tmp) {
  gulp.src(['app/images/*.jpg', 'app/images/*.png'])
    //prevent pipe breaking caused by errors from gulp plugins
    .pipe(plumber())
    .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
    .pipe(gulp.dest('app/images'));
});

//compressing images & handle SVG files
gulp.task('images-deploy', function() {
  gulp.src(['app/images/**/*', '!app/images/README'])
      //prevent pipe breaking caused by errors from gulp plugins
      .pipe(plumber())
      .pipe(gulp.dest('dist/images'));
});

//load modernizr from gulp
gulp.task('modernizr', function() {
  return gulp.src('app/scripts/src/_includes/*.js')
        .pipe(modernizr())
        .pipe(uglify())
        // creates app/scripts/src/_includes/vendor/modernizr.js 
        .pipe(gulp.dest('app/scripts/src/_includes/vendor'));
});   

//transpile our es2015 files to compliant javascript
gulp.task('babel', function() {
  return gulp.src('app/scripts/src/_babel/*.js')
        .pipe(sourceMaps.init())
        .pipe(babel({
          presets: ['es2015']
        }))
        .pipe(concat('all.js'))
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('app/scripts/src/_includes'));
});

//compiling our Javascripts
gulp.task('scripts', ['babel'], function() {
  //this is where our dev JS scripts are
  return gulp.src(['app/scripts/src/_includes/**/*.js'])
              //prevent pipe breaking caused by errors from gulp plugins
              .pipe(plumber())
              //here we pass the order in which the files are to be concatenated
              .pipe(order(['vendor/*.js', 'all.js']))
              //this is the filename of the compressed version of our JS
              .pipe(concat('app.js'))
              //catch errors
              .on('error', gutil.log)
              //compress :D
              //.pipe(uglify())
              //where we will store our finalized, compressed script
              .pipe(gulp.dest('app/scripts'))
              //notify browserSync to refresh
              .pipe(browserSync.reload({stream: true}));
});

//compiling our Javascripts for deployment
gulp.task('scripts-deploy', function() {
  //this is where our dev JS scripts are
  return gulp.src(['app/scripts/src/_includes/**/*.js'])
              //prevent pipe breaking caused by errors from gulp plugins
              .pipe(plumber())
              //this is the filename of the compressed version of our JS
              .pipe(concat('app.js'))
              //compress :D
              .pipe(uglify())
              //where we will store our finalized, compressed script
              .pipe(gulp.dest('dist/scripts'));
});

//compiling our SCSS files
gulp.task('styles', function() {
  //the initializer / master SCSS file, 
  //which will just be a file that imports everything
  return gulp.src('app/styles/scss/main.scss')
              //prevent pipe breaking caused by errors from gulp plugins
              .pipe(plumber({
                errorHandler: function(err) {
                  console.log(err);
                  this.emit('end');
                }
              }))
              //get sourceMaps ready
              .pipe(sourceMaps.init())
              //include SCSS and list every 'include' folder
              .pipe(sass({
                errLogToConsole: true,
                includePaths: [
                  'app/styles/scss/'
                ]
              }))
              // cssnext also prefix the css output 
              // (compress set to false so source maps work)
              .pipe(cssnext({
                compress: false
              }))
              //catch errors
              .on('error', gutil.log)
              //the final filename of our combined css file
              .pipe(concat('styles.css'))
              //get our sources via sourceMaps
              .pipe(sourceMaps.write())
              //where to save our final, compressed css file
              .pipe(gulp.dest('app/styles'))
              //notify browserSync to refresh
              .pipe(browserSync.reload({stream: true}));
});

//compiling our SCSS files for deployment
gulp.task('styles-deploy', function() {
  //the initializer / master SCSS file, 
  //which will just be a file that imports everything
  return gulp.src('app/styles/scss/main.scss')
              .pipe(plumber())
              //include SCSS includes folder
              .pipe(sass({
                includePaths: [
                  'app/styles/scss',
                ]
              }))
              .pipe(cssnext({
                compress: true
              }))
              //the final filename of our combined css file
              .pipe(concat('styles.css'))
              //where to save our final, compressed css file
              .pipe(gulp.dest('dist/styles'));
});

//basically just keeping an eye on all HTML files
gulp.task('html', function() {
  //watch any and all HTML files and refresh when something changes
  return gulp.src('app/*.html')
      .pipe(plumber())
      .pipe(browserSync.reload({stream: true}))
      //catch errors
      .on('error', gutil.log);
});

//migrating over all HTML files for deployment
gulp.task('html-deploy', function() {
  //grab everything, which should include htaccess, robots, etc
  gulp.src('app/*')
      //prevent pipe breaking caused by errors from gulp plugins
      .pipe(plumber())
      .pipe(gulp.dest('dist'));

  //grab any hidden files too
  gulp.src('app/.*')
      //prevent pipe breaking caused by errors from gulp plugins
      .pipe(plumber())
      .pipe(gulp.dest('dist'));

  gulp.src('app/fonts/**/*')
      //prevent pipe breaking caused by errors from gulp plugins
      .pipe(plumber())
      .pipe(gulp.dest('dist/fonts'));

  //grab all of the styles
  gulp.src(['app/styles/*.css', '!app/styles/styles.css'])
      //prevent pipe breaking caused by errors from gulp plugins
      .pipe(plumber())
      .pipe(gulp.dest('dist/styles'));
});

//cleans our dist directory in case things got deleted
gulp.task('clean', function() {
  return shell.task([
    'rm -rf dist'
  ]);
});

//create folders using shell
gulp.task('scaffold', function() {
  return shell.task([
    'mkdir dist',
    'mkdir dist/fonts',
    'mkdir dist/images',
    'mkdir dist/scripts',
    'mkdir dist/styles'
  ]);
});

//this is our master task when you run `gulp` in CLI / Terminal
//this is the main watcher to use when in active development
//  this will:
//  startup the web server,
//  start up browserSync
//  compress all scripts and SCSS files
gulp.task('default', ['browserSync', 'scripts', 'styles'], function() {
  //a list of watchers, so it will watch all of the following files waiting for changes
  gulp.watch('app/scripts/src/**', ['scripts']);
  gulp.watch('app/styles/scss/**', ['styles']);
  gulp.watch('app/images/**', ['images']);
  gulp.watch('app/*.html', ['html']);
});

//this is our deployment task, it will set everything for deployment-ready files
gulp.task('deploy', gulpSequence('clean', 'scaffold', ['scripts-deploy', 'styles-deploy', 'images-deploy'], 'html-deploy'));