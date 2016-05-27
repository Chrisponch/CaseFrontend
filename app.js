
var mainApp = angular.module('CaseFrontendApp',[
	'ui.router',
	])
mainApp.config(function($stateProvider,$urlRouterProvider,$locationProvider){
	$locationProvider.html5Mode(!0);
	$urlRouterProvider.otherwise("/");
	$stateProvider
		.state('bienvenido', {
			url: '/',
			template: '<div>Bienvenido</div>'
		})
		.state('usuarios', {
			url: '/usuarios/',
			templateUrl: 'partials/list.html',
			controller: 'usersCtrl'
		})
		.state('capturar', {
			url: '/capturar/',
			templateUrl: 'partials/capturar.html',
			coontroller:'captureCtrl'
		})
		.state('guardarToken', {
			url:'/token', 
			templateUrl:'partials/token.html'
			controller:'tokenCtrl'
		})
});

mainApp.run(function($httpBackend,ModeloData){
	//Servira para emular una llamada API 
    $httpBackend.whenGET('/usuarios').respond(function(method, url, data) {
        var usuarios = ModeloData.general();
        return [200, usuarios, {}];
    });
});

mainApp.controller('mainAppCtrl',function(){

})

