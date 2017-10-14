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
            css: {
                files: ["../../src/scss/**"],
                tasks: ["sass"],
            }
        },
        browserSync: {
            bsFiles: {
                src: "../../src/scss/**"
            },
            options: {
                watchTask: true,
                injectChanges: true,
                open: false,
                // Replace proxy with the location on your local WP site
                proxy: "wordcamp2017.loc",
                // You can call this whatever you want
                tunnel: "wordcamp2017"
            },
        }
    });

    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-browser-sync");

    // Default task(s).
    grunt.registerTask("default", ["browserSync", "watch"]);
};