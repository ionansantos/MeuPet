angular.module("meuPet").config(function ($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	
	$routeProvider.when("/", {
		templateUrl: "view/loja.html",
		controller: "lojaCtrl",
	});
	$routeProvider.when("/servicos", {
		templateUrl: "view/servicos.html",
		controller:"meuPetCtrl",
	});
	// $routeProvider.when("/servicos", {
	// 	templateUrl: "view/servicos.html",
	// 	controller:"meuPetCtrl",
	// });
});