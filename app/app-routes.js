(function () {
  'use strict';

  angular
    .module('sumanAngularApp')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
