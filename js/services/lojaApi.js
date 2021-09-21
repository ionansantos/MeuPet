angular.module("meuPet").factory("lojaApi", function ($http, config) {
	let getProdutos = function () {
		return $http.get(config.baseUrl + "/produtos");
	};

	return {
		getProdutos: getProdutos()
	};
});



// angular.module("meuPet").service("lojaApi", function($http){
//   this.getProdutos = function(){
//       return $http.get("http://localhost:3000/produtos")
//   }
// })