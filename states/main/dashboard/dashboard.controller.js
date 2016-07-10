(function(){
	'use strict';

	angular.module('app').config(function($stateProvider) {
        $stateProvider.state('main.dashboard', {
            url: '/dashboard',
            templateUrl: 'states/main/dashboard/dashboard.template.html',
            controller: 'dashboardController',
            resolve: {}
        });
    });

	angular.module('app').controller('dashboardController', function($scope){
		// nothing
	});

})();