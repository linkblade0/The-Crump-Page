angular.module('crumpSite')
.controller('vidCtrl', function($scope, vidSvc) {

  $scope.videoPage = {name:'Video Gallery'}

  $scope.video = vidSvc.getVid();

})
