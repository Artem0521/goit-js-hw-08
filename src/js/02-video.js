
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const VIDEO_CURRENT_TIME = 'videoplayer-current-time';

player.on('timeupdate',  throttle( e => {
    localStorage.setItem(VIDEO_CURRENT_TIME, e.seconds);
    }, 1000)
    );

    const localStorageValue = localStorage.getItem(VIDEO_CURRENT_TIME);
    if (localStorageValue === null || localStorageValue === undefined) {
        return;
    } else {
        player.setCurrentTime(localStorageValue);
    }

