angular.module('crumpSite')
.service('vidSvc', function() {

  var vids = [{
    vidImgUrl: 'legendary-newscasters.jpg',
    vidUrl: "sZ4ROYvzYnE"
  },
  {
    vidImgUrl: 'voices-in-head.webp',
    vidUrl: '-p6H09QpstU'
  },
  {
    vidImgUrl: 'speedrunners.jpg',
    vidUrl: 'Jv6Ug3S2Ay8'
  },
  {
    vidImgUrl: 'vs-part1.jpg',
    vidUrl: 'Q8LlhOdDqW8'
  },
  {
    vidImgUrl: 'minecraft-part2.jpg',
    vidUrl: 'jI8x3T6-6hs'
  },
  {
    vidImgUrl: 'smashvs.jpg',
    vidUrl: 'qJJ2_7VEmGo'
  },
  {
    vidImgUrl: 'lootCrate.jpg',
    vidUrl: '0130aQNIdsI'
  },
  {
    vidImgUrl: 'race-the-sun.jpg',
    vidUrl: 'MGmyrQQN0QY'
  },
  {
    vidImgUrl: 'ftl.jpg',
    vidUrl: 'RCK1RxBPC1k'
  },
  {
    vidImgUrl: 'kerbals.jpg',
    vidUrl: 'c9GSe3Akn0E'
  },
  {
    vidImgUrl: 'loving-memory.jpg',
    vidUrl: '8TVAyoIaJmo'
  },
  {
    vidImgUrl: 'monster-hunter.jpg',
    vidUrl: 'YhZkqpSE_GU'
  }
]

  this.getVid = function() {
    return vids;
  }


})
