// Karma configuration

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './static/',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // start these browsers PhantomJs
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers : ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage'
        ],

        preprocessors: {
            '**/!(*.spec)+(.js)': ['coverage']
        },

        // list of files / patterns to load in the browser
        files: [
            'lib/angular/angular.js',
            'lib/angular-bootstrap/ui-bootstrap.min.js',
            'lib/angular-bootstrap/ui-bootstrap-tpls.js',
            'lib/angular-mocks/angular-mocks.js',
            'js/**.js',
            '../karma/**/*.spec.js'
        ],


        phantomjsLauncher: {
            // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
            exitOnResourceError: true
        },


        // // list of files to exclude
        // exclude: [
        // ],


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        junitReporter : {
            outputDir:'target/surefire-reports/',
            outputFile: 'results.xml',
            suite: 'continuous'
        },

        coverageReporter: {
            dir : 'coverage/',
            reporters:[
                {type:'cobertura', subdir:".",file:'cobertura.xml'},
                {type:'html', file:'coverage.html'}
            ]
        }
    });
};
