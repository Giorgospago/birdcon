const app = angular.module("app", ['ngSelectMultiple']);

app.controller("MainController", ['$scope', '$timeout', function($scope, $timeout){

	$scope.list = [
		{id:1,name:"Item 1"},
		{id:2,name:"Item 2"},
		{id:3,name:"Item 3"},
		{id:4,name:"Item 4"},
		{id:5,name:"Item 5"}
	];

	$scope.my_first_list = [1,2,4];

}]);
