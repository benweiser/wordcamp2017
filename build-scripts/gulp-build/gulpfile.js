"use strict";

const browserSync = require("browser-sync").create();
const gulp        = require("gulp");
const sass        = require("gulp-sass");
const watch       = require("gulp-watch");

const srcPath = "../../src/scss/**";
const distPath = "../../assets/css";

gulp.task("browser-sync", function(){
    browserSync.init({
        injectChanges: true,
        open: false,
        // Replace proxy with the location on your local WP site
        proxy: "wordcamp2017.loc",
        // You can call this whatever you want
        tunnel: "wordcamp2017"
    });
});

gulp.task("sass:compile", function(){
    return gulp.src(srcPath)
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(gulp.dest(distPath))
        .pipe(browserSync.stream());
});

gulp.task("watch", ["browser-sync"], function(){
   gulp.watch(srcPath, ["sass:compile"]);
});