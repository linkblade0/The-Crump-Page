angular.module('crumpSite')
.controller('viewDirCtrl', function($scope, $sce, vidSvc) {


  var modal = document.getElementById('myModal');

  // var img = document.getElementById('myImg');
  var modalImg = document.getElementById('img01');
  // var modalVid = document.getElementById('vid01');

  $scope.vidWindow;

  $scope.expand = function() {
    modal.style.display = 'block';
    modalImg.style.display = 'block';
    modalImg.src = 'img/' + this.img.imgUrl;
  }

  $scope.closeClick = function() {
    modal.style.display = 'none';
    modalImg.style.display = 'none';
    if(player) {
      player.destroy();
    }
  }

//youtube Api stuff
  var tag = document.createElement('script');

  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
   $scope.onYouTubeIframeReady = function() {
     modal.style.display = 'block';

    console.log('am i running')
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: this.vid.vidUrl,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    })
  }

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();

//end of youtube Api code


  var span = document.getElementById('close');



  }
})
