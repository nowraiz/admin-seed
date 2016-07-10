(function(){
	'use strict';

	angular.module('app').config(function($stateProvider) {
        $stateProvider.state('main.users', {
            url: '/users',
            templateUrl: 'states/main/users/users.template.html',
            controller: 'usersController',
            resolve: {}
        });
    });

	angular.module('app').controller('usersController', function($scope){
		// nothing
	});

})();