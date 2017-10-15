const browserSync = require("browser-sync");

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    "../../assets/css/style.css": "../../src/scss/**/*.scss"
                },
                options: {
                    sourceMap: true,
                    outputStyle: "compressed"
                },
            }
        },
        watch: {
            options: {
                spawn: false
            },
            css: {
                files: ["../../src/scss/**"],
                tasks: ["sass", "browserSync-inject"],
            }
        },
    });

    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");
    //grunt.loadNpmTasks("grunt-browser-sync");

    // Init BrowserSync manually
    grunt.registerTask("browserSync-init", function () {
        const done = this.async();
        browserSync({
            watchTask: true,
            //injectChanges: true,
            open: false,
            // Replace proxy with the location on your local WP site
            proxy: "wordcamp2017.loc",
            // You can call this whatever you want
            tunnel: "wordcamp2017"
        }, function (err, bs) {
            done();
        });
    });

    grunt.registerTask("browserSync-inject", function () {
        browserSync.reload(["../../assets/css/style.css"]);
    });

    // Default task(s).
    grunt.registerTask("default", ["browserSync-init", "watch"]);
};