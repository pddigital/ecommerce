angular.module('ecommerceApp', ['ui.router'])

.config(function( $stateProvider, $urlRouterProvider) {

	$stateProvider
  .state('main', {
    url: '/',
    templateUrl: './views/main.html',
    controller: 'mainCtrl'
  })

  $urlRouterProvider.otherwise('/');

})
