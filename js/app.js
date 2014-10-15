var app = angular.module('MonApp',['ngAnimate', 'ngRoute','ui.bootstrap', 'ngSanitize']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
    .when('/', {controller: 'navCtrl', templateUrl: 'partials/home.html'})
    .when('/calendrier', {controller: 'navCtrl', templateUrl: 'partials/calendrier.html'})
    .when('/conseils_jardinage', {templateUrl: 'partials/jardinage.html'})
    .when('/histoires_regionales', {templateUrl: 'partials/histoires.html'})
    .when('/foires_marches_brocantes', {templateUrl: 'partials/foires.html'})
    .when('/horoscope', {templateUrl: 'partials/horoscope.html'})
    .when('/mentionslegales', {templateUrl: 'partials/mentionslégales.html'})
    .when('/historique', {templateUrl: 'partials/historique.html'})
     .otherwise({redirectTo: '/'});

}]);


