angular.module("meuPet").controller("lojaCtrl", function ($scope, lojaApi){
    
    $scope.produtos = []
    $scope.produtoInfo = []
    
    const carregaProdutos = function () {
        lojaApi.getProdutos().then((response) => {
            $scope.produtos = response.data
            // console.log(response)
        }).catch(function () {
            $scope.message = "Serviço fora do ar"
        })
    }
    carregaProdutos()
})