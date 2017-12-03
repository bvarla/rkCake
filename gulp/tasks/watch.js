
var gulp = require('gulp'),
watch=require('gulp-watch'),
browserSync=require('browser-sync').create();

gulp.task('watch',function(){
    
        browserSync.init({
            server:{
                baseDir:"./"
            }
        });
    
        watch('./index.html',function(){
            browserSync.reload();
        })
    
        watch('./assests/styles/**/*.css',function(){
            gulp.start('cssInject');
        })

        watch('./assests/scripts/**/*.js',function(){
            gulp.start('scriptsRefresh');
        })
    
    });

    gulp.task('cssInject',['styles'],function(){
        return gulp.src('./temp/styles/styles.css')
        .pipe(browserSync.stream());
    })

    gulp.task('scriptsRefresh',['scripts'], function(){
           browserSync.reload();
    })