module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-http-server');

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
    },
    'http-server': {
        'dev': {
            root: '.',
            port: 8282,
            host: "localhost",
            autoIndex: true,
            ext: "html",
            runInBackground: false,
            openBrowser : true,
            logFn:false
        }
    }
  };

  grunt.initConfig( grunt.util._.extend( taskConfig, userConfig ) );

  grunt.registerTask( 'default', [ 'run_server'] );
  grunt.registerTask( 'run_server', [ 'build', 'http-server' ] );
  grunt.registerTask( 'build', [
    'copy:build_vendor_js', 'copy:build_vendor_css', 'copy:build_vendor_fonts'
  ]);
  
};