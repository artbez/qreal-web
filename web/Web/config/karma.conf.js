module.exports = function(config){
    config.set({
    basePath : '../',

    files : [
      'authorization/lib/angular/angular.js',
      'authorization/lib/angular/angular-*.js',
      'authorization/test/lib/angular/angular-mocks.js',
      'authorization/js/**/*.js',
      'authorization/test/unit/**/*.js'
    ],

    exclude : [
      'authorization/lib/angular/angular-loader.js',
      'authorization/lib/angular/*.min.js',
      'authorization/lib/angular/angular-scenario.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'authorization/test_out/unit.xml',
      suite: 'unit'
    }

})}
