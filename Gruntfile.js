module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-babel');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      options: {
        port: process.env.PORT || 8000
      },
      prod: {
        options: {
          keepalive: true
        }
      },
      dev: {}
    },

    watch: {
      css: {
        files: ['Gruntfile.js', 'src/css/*', 'src/js/*', 'src/js/vendor/*'],
        tasks: ['less', 'babel'],
      }
    },

    less: {
      files: {
        src: ['src/css/reset.less', 'src/css/*.less'],
        dest: 'src/app.css',
        options: {
          compress: true,
        }
      }
    },

    babel: {
      options: {
        presets: ['es2015'],
        minified: true,
      },
      dist: {
        files: {
          'src/app.js': 'src/js/app.js'
        }
      }
    }

  });

  grunt.registerTask('default', [
    'less',
    'babel',
    'connect:dev',
    'watch:css',
  ]);

  grunt.registerTask('prod', [
    'less',
    'babel',
    'connect:prod',
  ]);
};
