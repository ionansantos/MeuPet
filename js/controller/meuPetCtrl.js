angular.module("meuPet").controller("meuPetCtrl", function ($scope, lojaApi, racaApi, servicoApi) {

    $scope.produtos = []
    $scope.ClientesBanho = []
    $scope.ClientesConsulta = []
    $scope.balancos = []




    $scope.adicionaCliente = function (cliente) {
        
        // se for banho ,irá para Fila de banhos

        if (cliente.servico.tipo === 'banho') {
            $scope.ClientesBanho.push(cliente)

            // verifica se incluirá Tosa

            if (cliente.servico.extra === true) {
                cliente.servico.extra = 'sim'
               
            } else {
                cliente.servico.extra = 'nao'
            }

            // se for consulta irá para fila de Consulta

        } else if (cliente.servico.tipo === 'consulta') {
            $scope.ClientesConsulta.push(cliente)
        }

        delete $scope.cliente
    }


    $scope.finalizaConsulta = function (cliente) {
        $scope.balancos.push(cliente)
        $scope.ClientesConsulta.splice(cliente, 1)

    }
    $scope.finalizaBanho = function (banho) {
        $scope.balancos.push(banho)
        $scope.ClientesBanho.splice(banho, 1)
    }



    //  carregando dados da Loja

    const carregaProdutos = function () {
        lojaApi.getProdutos.then((response) => {
            $scope.produtos = response.data
            // console.log(response)
        }).catch(function () {
            $scope.message = "Serviço fora do ar"
        })
    }
    const carregaServico = function () {
        servicoApi.getServico.then((response) => {
            $scope.servicos = response.data
        })
    }
    const carregaRaca = function () {
        racaApi.getRaca.then((response) => {
            $scope.racas = response.data
        })

    }


    carregaRaca()
    carregaServico()
    carregaProdutos()
})