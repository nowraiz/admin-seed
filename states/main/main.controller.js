(function(){
	'use strict';

	angular.module('app').config(function($stateProvider) {
        $stateProvider.state('main', {
            url: '/main',
            templateUrl: 'states/main/main.template.html',
            controller: 'mainController',
            resolve: {}
        });
    });

	angular.module('app').controller('mainController', function($scope){
		// nothing
	});

})();