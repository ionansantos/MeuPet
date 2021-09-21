angular.module("meuPet").factory("servicoApi", function ($http, config) {
	let getServico = function () {
		return $http.get(config.baseUrl + "/servicos");
	};

	return {
		getServico: getServico()
	};
});
