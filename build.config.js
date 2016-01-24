module.exports = {
  build_dir: 'build',
  compile_dir: 'bin',
  vendor_files: {
    js: [
      'vendor/jquery/dist/jquery.min.js',
      'vendor/angular/angular.min.js',
      'vendor/angular-animate/angular-animate.min.js',
      'vendor/angular-ui-router/release/angular-ui-router.min.js',
      'vendor/angular-ui-router-anim-in-out/anim-in-out.js',
      'vendor/bootstrap/dist/js/bootstrap.min.js',
      'vendor/wow/dist/wow.min.js'
    ],
    css: [
      'vendor/bootstrap/dist/css/bootstrap.min.css',
      'vendor/wow/css/libs/animate.css',
      'vendor/font-awesome/css/font-awesome.min.css',
      'vendor/angular-ui-router-anim-in-out/css/anim-in-out.css'
    ],
    font: [
      'vendor/bootstrap/dist/fonts/*.*',
      'vendor/font-awesome/fonts/*.*',
    ],
    assets: [
    ]
  }
};
