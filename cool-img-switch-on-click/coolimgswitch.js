var toto = 'blue';
document.querySelector(".btn-trigger").onclick = function() {
var image = document.getElementById('imgclkchange');
if (toto == 'blue') {
  image.src = 'coolimgswitchressource/slap-left.png';
  toto = 'red';
} else {
  image.src = 'coolimgswitchressource/slap-right.png';
  toto = 'blue';
}
}
