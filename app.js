angular.module('crumpSite', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/resume')

  $stateProvider
    .state('main', {
      url: '/resume',
      templateUrl: 'views/resume.html',
      controller: 'mainCtrl'
    })

    .state('gallery', {
      url: '/gallery',
      templateUrl: 'views/photoshop.html',
      controller: 'picCtrl'
    })

    .state('videos', {
      url: '/videos',
      templateUrl: 'views/videos.html',
      controller: 'vidCtrl'
    })
})
