import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
const currentTime = localStorage.getItem(STORAGE_KEY)
    ? localStorage.getItem(STORAGE_KEY)
    : 0;
//прослушка события обновления времени во время игры плеера через каждую секунду
player.on('timeupdate', throttle(onPlay, 1000));

// ф-ция игры плеера и установки ключа в локальное хранилище, что измеряется в секундах
function onPlay({seconds}) {
    localStorage.setItem(STORAGE_KEY, seconds);
}

// ф-ция при перезагрузке странички, которая восстанавливает время проигрывания с текущего ключа,
//который записан в STORAGE_KEY
player.setCurrentTime(currentTime);


//для того, чтоб проигрівался плеер во время загрузки странички
player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});





