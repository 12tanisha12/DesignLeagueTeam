const coinSfx = new Sfx('sfx/Mario Coin.wav');
const pipesfx = new Sfx('sfx/Mario Pipe-wav');
const powerUpSfx = new Sfx('sfx/Mario Powerup,wav');
const container = document. querySelector(".content');
let ninja;

function Sfx(src) {
this.sound = document.createElement ('audio");
this. sound.src = src;
this.sound setAttribute('preload', 'auto');
this. sound.setAttribute('controls'. 'none');
this.sound.style.display = none';
document.body.appendChild (this.sound);
this-play = function() {
this. sound. play();
};
}

function Ninjas (name, age, height, color) {
this.name = name;
this.age = age;
this.height = height;
this. color = color;
this.coin = () =>
//audio
coinSfx. play();


const button = document-querySelector( #btnCoin*):
  
button.style.setProperty('background-color*. '#2ecc71'):
button.style.setProperty('border-color• #2ecc710);
button.style.setProperty('color*. war(--bg-color)'):
                        

//coin effect
const coining = document.createElement (img":
coinImg-setAttribute('src', *ings/coin.png');
coinIng-setAttribute( 'id', "coin-ing"):
coinImg-style.transform = translatel-50%,calc(-100% - + ninja.height + 'px)';
container.appendChild(coinIng):


$('#coin-ing') .animatelt top:
160%%, opacity: 7 1. 250):
$( 'coin-img').animatell top:
170%*, opacity: 0 7. 250, 0) = 4
$('=coin-img'). remove():
button.style.setProperty('background-color'. transparent'): 
button.style.setProperty(border-color'- var(--accent-color)'): 
button.style.setProperty('color*. *var(--accent-color*):
this-pipe = () → { pipeSfx. play():
this. powerUp = 0) → t powerUpSfx-play():
}:









//loader
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  setTimeout(() => {
    loader.setAttribute('style', 'opacity: 0;');
  }, 500);
  setTimeout(() => {
    loader.parentNode.removeChild(loader);
    document.body.style.overflow = 'initial';
  }, 1000);
});







