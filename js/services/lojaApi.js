angular.module("meuPet").factory("lojaApi", function ($http, config) {
	let _getProdutos = function () {
		return $http.get(config.baseUrl + "/produtos");
	};
	let _getProduto = function(id){
		return $http.get(config.baseUrl + "/produtos/" + id)
	}
	return {
		getProdutos: _getProdutos,
		getProduto: _getProduto,
	};
});



// angular.module("meuPet").service("lojaApi", function($http){
//   this.getProdutos = function(){
//       return $http.get("http://localhost:3000/produtos")
//   }
// })