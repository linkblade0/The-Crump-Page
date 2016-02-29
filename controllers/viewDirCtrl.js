angular.module('crumpSite')
.controller('viewDirCtrl', function($scope) {

  var modal = document.getElementById('myModal');

  // var img = document.getElementById('myImg');
  var modalImg = document.getElementById('img01');
  $scope.vidWindow;

  $scope.expand = function() {
    modal.style.display = 'block';
    modalImg.src = 'img/' + this.img.imgUrl;
  }

  $scope.play = function() {
    modal.style.dispay = 'block';
    // $scope.vidWindow = this.vid.vidUrl;
    console.log(this.vid.vidUrl);
  }

  var span = document.getElementById('close');

  $scope.closeClick = function() {
    modal.style.display = 'none';
  }

})
