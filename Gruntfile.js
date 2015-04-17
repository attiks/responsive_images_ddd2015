/* global module:false */
module.exports = function(grunt) {
  var port = grunt.option('port') || 8000;
  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: port,
          base: '.'
        }
      }
    },

    watch: {
      options: {
        livereload: {
          port: 35730
        }
      },
      main: {
        files: [ 'slides.md', 'index.html' ]
      },
      svg: {
        files: ['svg/{,**/}*.svg'],
        tasks: ['svgmin'],
      },
    },

    svgmin: {
      options: {
        plugins: [
          {
            removeViewBox: false
          },
          {
            removeUselessStrokeAndFill: false
          }
        ]
      },
      dist: {
        expand: true,
        cwd: 'raw_svg',
        src: ['{,**/}*.svg'],
        dest: 'svg',
      }
    }
  });

  // Dependencies
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-contrib-connect' );
  grunt.loadNpmTasks( 'grunt-svgmin' );

  // Serve presentation locally
  grunt.registerTask( 'serve', [ 'connect', 'watch' ] );

};
