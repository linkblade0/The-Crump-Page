angular.module('crumpSite')
.service('picSvc', function() {

var pics = [{
    imgUrl: 'Amazing_squirrel-min.png'
  },
  {
    imgUrl: 'business_crumps.png'
  },
  {
    imgUrl: 'Crump_Bump_Seal-min.png'
  },
  {
    imgUrl: 'Crump_vs_Pat.jpg'
  },
  {
    imgUrl: 'gamer.jpg'
  },
  {
    imgUrl: 'kiss_a_day.jpg'
  },
  {
    imgUrl: 'laptop-crumps-min.jpg'
  },
  {
    imgUrl: 'lost_twin.jpg'
  },
  {
    imgUrl: 'LPitC_logo.png'
  },
  {
    imgUrl: 'ncaa_crump.png'
  },
  {
    imgUrl: 'Picture_of_me_trippy.png'
  },
  {
    imgUrl: 'TheOnesintheCorner-min.png'
  },
]

this.getPic = function() {
  return pics;
}

})
