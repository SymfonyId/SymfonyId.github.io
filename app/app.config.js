
(function () {
    'use strict';
    angular
            .module('symfonyId')
            .config('$compileProvider', function ($compileProvider) {
                $compileProvider.debugInfoEnabled(true);
            });

});