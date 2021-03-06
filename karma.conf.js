module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/app.js',
      // 'app/components/**/*.js',
      // 'app/katas/fizzbuzz/*.js',
       'app/katas/romannumeral/*.js',
      // 'app/katas/leapyear/LeapYear.js',
      // 'app/katas/leapyear/LeapYearSpec.js'
      // 'app/katas/taxifare/*.js'
      //'app/katas/blackjack/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
