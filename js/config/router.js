angular.module("meuPet").config(function ($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	
	$routeProvider
	
	.when("/produtos", {
		templateUrl: "view/loja.html",
		controller: "lojaCtrl",
	})
	.when("/servicos", {
		templateUrl: "view/servicos.html",
		controller:"meuPetCtrl",
	})
	.when("/produtos/:produto/:produtoId", {
		templateUrl: "/view/produto.html",
		controller:"produtoInfoCtrl",
	});
});

