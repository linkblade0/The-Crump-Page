angular.module('crumpSite')
.directive('dirViewer', function() {

  return {
    restrict: 'E',
    templateUrl: 'directives/viewer.html',
    scope: {},
    controller: 'viewDirCtrl'
    // link: function(scope, element, attr) {
    //   ('#myImg').onclick = function() {
    //     var modal = document.getElementById('myModal');
    //
    //     var modalImg = document.getElementById('img01');
    //
    //     modal.style.display = 'block';
    //     modalImg.src = this.src;
    //   }
    // }
  }

})
