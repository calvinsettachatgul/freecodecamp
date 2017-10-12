module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      files: ['basic_javascript.js'],
      tasks: ['shell']
    },
    shell: {
      test: {
        command: 'node basic_javascript.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['watch']);
};

