module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      sass: {
        files: "sass/*.scss",
        tasks: "sass:dev"
      }
    },
    sass: {
      dev: {
        files: {
          "stylesheets/style.css": "sass/style.scss"
        }
      }
    },
    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            "stylesheets/*.css",
            "*.html",
            "includes/*.html",
            "*.js"
          ]
        },
	    options: {
	      watchTask: true,
	      server: {
	      baseDir: "./"
	    }
		   }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
  

  // Launch BrowserSync + watch task
  grunt.registerTask('default', ['browserSync', 'watch']);

};

