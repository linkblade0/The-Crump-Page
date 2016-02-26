angular.module('crumpSite')
.controller('picCtrl', function($scope, picSvc) {

  $scope.photoshop = {name:'Photoshop Gallery'}

  $scope.image = picSvc.getPic();

})
