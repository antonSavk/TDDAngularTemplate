'use strict';

/**
 * @ngdoc overview
 * @name angularTddApp
 * @description
 * # angularTddApp
 *
 * Main module of the application.
 */
angular
  .module('angularTddApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
