import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const refs = { player: document.querySelector("#vimeo-player") };

const getTime = () => {
    let time = 0;
    try {
        time = localStorage.getItem('videoplayer-current-time');
        if (!time) { return 0 }
    }
    catch (error) {
        console.log(error.message);
    }
    return time 
};

const setTime = (time) => {
    try {
        localStorage.setItem('videoplayer-current-time', time ? time : 0);
    } catch (error) {
        console.log(error.message);
    }
}

 const player = new Player(refs.player);

player.setCurrentTime(getTime());

const onPlay = (data) => { setTime(data.seconds) }

player.on('timeupdate', throttle(onPlay, 1000));
