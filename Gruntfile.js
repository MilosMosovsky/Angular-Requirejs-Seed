'use strict';


module.exports = function(grunt){

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.initConfig({

        connect: {
            server: {
                options: {
                    livereload: false,
                    base: './public',
                    port: 8000
                }
            }
        },
        watch: {
            scripts: {
                files: ['public/**'],
                tasks: ["sass"],
                options: {
                    spawn: false,
                    interrupt: true,
                    livereload : true
                }
            }
        },
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    'public/css/app.css': 'public/scss/app.scss'       // 'destination': 'source'
                }
            }
        }
    });

    grunt.registerTask('default', ['connect:server',"sass","watch"]);
};