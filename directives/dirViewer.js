angular.module('crumpSite')
.directive('dirViewer', function() {

  return {
    restrict: 'E',
    templateUrl: 'directives/viewer.html',
    controller: 'viewDirCtrl'
  }

})
