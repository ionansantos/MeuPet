angular.module("meuPet").factory("racaApi", function ($http, config) {
	let getRaca = function () {
		return $http.get(config.baseUrl + "/racas");
	};

	return {
		getRaca: getRaca()
	};
});
