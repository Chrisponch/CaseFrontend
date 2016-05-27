
angular.module('CaseFrontendApp').factory('UsuariosServicio', function($http) {
    var service = {
        obtenerUsuarios: function() {
            return $http.get('/usuarios');
            
        }
    };
    
    return service;    
})