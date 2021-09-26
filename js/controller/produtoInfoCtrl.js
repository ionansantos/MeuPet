angular.module("meuPet").controller("produtoInfoCtrl", function($scope,$routeParams){

    $scope.produtoId = $routeParams.produtoId;


    
});



// const produtoInfo = function () {
//     lojaApi.getProdutos.then((response) => {
//         $scope.produtoInfo = response.data  
//         console.log($scope.produtoInfo)
//     }).catch(function () {
//         $scope.message = "Serviço fora do ar"
//     })
// }
// produtoInfo()