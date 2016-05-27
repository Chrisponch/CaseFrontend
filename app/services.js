
angular.module('CaseFrontendApp')
.service('ModeloData', function(){
    $scope.data = [
        {
        "id": 1,
        "nombre": "Jose",
        "apellido": "Arredondo",
        "fecha": "2014-05-07T05:00:00.000Z",
        "carrera": "Doctor"
        },
        {
        "id": 1,
        "nombre": "Pedro",
        "apellido": "Aguilar",
        "fecha": "2014-05-13T05:00:00.000Z",
        "carrera": "Negociador"
        },
        {
        "id": 1,
        "nombre": "Adrian",
        "apellido": "Quijada",
        "fecha": "2014-05-13T05:00:00.000Z",
        "carrera": "Soldador"
        },
        {
        "id": 1,
        "nombre": "Beatrix",
        "apellido": "Brizuela",
        "fecha": "2014-05-13T05:00:00.000Z",
        "carrera": "Cantante"
        },
        {
        "id": 1,
        "nombre": "Carolina",
        "apellido": "Carranza",
        "fecha": "2014-05-13T05:00:00.000Z",
        "carrera": "Modelo"
        },
        {
        "id": 1,
        "nombre": "Daniel",
        "apellido": "Dolores",
        "fecha": "2014-05-13T05:00:00.000Z",
        "carrera": "Maestro"
        },
        {
        "id": 1,
        "nombre": "Ernesto",
        "apellido": "Emiliano",
        "fecha": "2014-05-13T05:00:00.000Z",
        "carrera": "Filosofo"
        }
        ]

    this.general = function(){
        return $scope.data;
    }
})
