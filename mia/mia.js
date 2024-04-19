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


const promptUser = () =›
let name = prompt 'Pick
let age;
let height;
let color;
a name: ') |l
'Ninja*:

  this. getAge = () → (
age = prompt ('Pick an age:") || *18*;
age = parseInt(age);
if (isNaN(age)) {
this. getAge();
else {
return:
1:
  
this-getHeight = () → {
height = prompt( 'Pick height: 1, 2, 3, 4') || 4;
height = parseInt (height) ;
if (height === 1 || height === 2 || height == 3 || height === 4) €
height = height * 64;
return:
else {
this. getHeight();

this getColor = () =>
1
color = prompt ( 'Choose color: Red Blue Green') |1 'red';
color = color. toLowerCase (J:
1f （color ===
'red'
color
"blue' [| color === 'green') €
return;
} else t
this getColor ():
0
1
this.appendImg = () = f
img = document. createElement (img*):
let size = 'width:' + height + 'px;height:' + height + 'px; ';
if (color === 'blue') (
ing, setAttribute('src', *ings/ninjal.png');
img. setAttribute( 'style', size); container.appendChild(imgl:
} else if (color === 'green') €
img. setAttribute('src', 'ings/ninja2-png*):
img, setAttribute('style', size); container.appendChild (img) ;
} else if (color === 'red') {
img. setAttribute('src', 'imgs/ninja3-png' );
img. setAttribute( 'style', size);
container.appendChild (img) :
+

                         







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







