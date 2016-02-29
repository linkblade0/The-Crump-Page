angular.module('crumpSite')
.directive('imgDir', function() {

  return {
    restrict: 'E',
    template: "<img id='myImg' class='pics' ng-click='selectImage()' ng-src='img/{{image.imgUrl}}'>"
    // scope: {
    //   image: '=',
    //   currentImg: '='
    // },
    // controller: function($scope) {
    //   $scope.selectImage = function() {
    //     $scope.currentImg = $scope.image;
    //   }
    // }
  }

})
