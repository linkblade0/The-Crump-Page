angular.module('crumpSite')
.directive('dirHeader', function() {

  return {
    restrict: 'E',
    templateUrl: 'directives/header.html',
    scope: {
      page: '='
    },
    controller: function($scope) {
      $scope.toggleClass = function() {
        var hamburger = angular.element(document.querySelector('.menu'));
        hamburger.toggleClass('open');
      }
    }

}
})

.directive('dirFooter', function() {

  return {
    restrict: 'E',
    templateUrl: 'directives/footer.html'
  }
})
