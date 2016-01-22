module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-copy');
  var userConfig = require( './build.config.js' );
  var taskConfig = {
    copy: {
      build_vendor_js: {
        files: [
          {
            src: [ '<%= vendor_files.js %>' ],
            dest: '<%= build_dir %>/',
            cwd: '.',
            expand: true
          }
        ]
      },
      build_vendor_css: {
        files: [
          {
            src: [ '<%= vendor_files.css %>' ],
            dest: '<%= build_dir %>/',
            cwd: '.',
            expand: true
          }
        ]
      },
      build_vendor_fonts: {
        files: [{
            expand: true,
            cwd: '.',
            src: [ '<%= vendor_files.font %>' ],
            dest: '<%= build_dir %>'
        }]
    }
    }
  };

  grunt.initConfig( grunt.util._.extend( taskConfig, userConfig ) );

  grunt.registerTask( 'default', [ 'build'] );
  grunt.registerTask( 'build', [
    'copy:build_vendor_js', 'copy:build_vendor_css', 'copy:build_vendor_fonts'
  ]);
  
};