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
                    base: './',
                    port: 8000
                }
            }
        },
        watch: {
            reload: {
                files: ['core/**'],
                options: {
                    spawn: false,
                    interrupt: true,
                    livereload : true
                }
            },
            scss : {
                files : ['scss/**'],
                tasks : ['sass'],
                options: {
                    livereload : true
                }
            }        },
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    'css/app.css': 'scss/app.scss'       // 'destination': 'source'
                }
            }
        }
    });

    grunt.registerTask('default', ['connect:server',"sass","watch"]);
};