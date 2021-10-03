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
	.when("/produto/:id", {
		templateUrl: "/view/produto.html",
		controller:"produtoInfoCtrl",
		resolve:{
			produto: function(lojaApi, $route){
				return lojaApi.getProduto($route.current.params.id);
			}
		}
	});
});

