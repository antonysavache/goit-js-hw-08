import Player from '@vimeo/player';
import throttle from 'lodash';
let time = 0;

let localShron = {key:time}


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const onPlay = function(data) {
    localShron.key = data
    console.log(localShron.key)
};

player.on('timeupdate', onPlay);

player.setCurrentTime(localShron.key)