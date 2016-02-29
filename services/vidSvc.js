angular.module('crumpSite')
.service('vidSvc', function() {

  var vids = [{
    vidImgUrl: 'legendary-newscasters.jpg',
    vidUrl: "sZ4ROYvzYnE"
  }]

  this.getVid = function() {
    return vids;
  }

})
