angular.module('crumpSite')
.controller('viewDirCtrl', function($scope) {

  var modal = document.getElementById('myModal');

  var img = $scope.image;
  var modalImg = document.getElementById('img01');

  // img.onclick = function() {
  //   modal.style.display = 'block';
  //   modalImg.src = this.src;
  // }
  $scope.expand = function() {
    modal.style.display = 'block';
    modalImg.src = img;
  }

  var span = document.getElementById('close');

  $scope.closeClick = function() {
    modal.style.display = 'none';
  }

})
