import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const onPlay = function (data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
    console.log(data.seconds)
}
    player.on('timeupdate', throttle(onPlay, 1000));

const saveSet = localStorage.getItem('videoplayer-current-time');
const parsedTime = JSON.parse(saveSet);
console.log(saveSet);

if (parsedTime){
    player.setCurrentTime(parsedTime);
}
