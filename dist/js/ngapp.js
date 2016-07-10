angular.module('app', ['ui.router']);

angular.module('app')
    .config(function($urlRouterProvider) {

        $urlRouterProvider.otherwise(function($injector, $location) {
            var state = $injector.get('$state');
            state.go('main.dashboard');
        });
    });
