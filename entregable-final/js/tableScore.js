let transform = 0;
let table = document.querySelector('#hi-score-effect')
let slides = table.querySelectorAll('.tr-effect').length;
let singleRotation = 360 / slides;

setInterval(function () {
  table.style.setProperty('--rotate', -transform + 'deg');
  transform = transform + singleRotation;
}, 1000);
