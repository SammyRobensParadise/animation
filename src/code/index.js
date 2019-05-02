const anime = require('lib/anime.js');
function setanim() {
    anime({
        targets: '#idp-animation',
        translateX: 250,
        rotate: '1turn',
        backgroundColor: '#FFF',
        duration: 800
    });
    console.log("called");
}