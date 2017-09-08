module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      files: ['basic_algorithm_scripting.js'],
      tasks: ['shell']
    },
    shell: {
      test: {
        command: 'node basic_algorithm_scripting.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['watch']);
};

