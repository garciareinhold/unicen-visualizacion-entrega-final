$( document ).ready(function() {

  //////NAV
     $('.leftmenutrigger').on('click', function(e) {
       e.preventDefault();
     $('.side-nav').toggleClass("open");
     $('[rel="popover"]').popover('hide')
    });


    $(".bttn").on('click', function(ev){
      console.log("entre");
      console.log($(this));
      ev.preventDefault();
      $(this).toggleClass("bttn-focus");
    })


    $(function(){
    $('[rel="popover"]').popover({
        placement: "bottom",
        container: 'body',
        html: true,
        content: function () {
            var clone = $($(this).data('popover-content')).clone(true).css('display', "block");
            return clone;
        }
    }).click(function(e) {
        e.preventDefault();

        if(  $('.side-nav').hasClass("open")){

          $('.side-nav').toggleClass("open");
        }

    });
});




  $("#right").click(function() {
  var currentLeft = parseInt($('.items').css('left'));
  if (currentLeft>(600)) {

    $('.items').css('left', (currentLeft - 400) + 'px');
  }
})

$('#left').click(function() {
  var currentLeft = parseInt($('.items').css('left'));
  if(currentLeft<=(1100-400)){
    $('.items').css('left', (currentLeft + 400) + 'px');
  }
})

$("#right-offer").click(function() {
var currentLeft = parseInt($('.offer-items').css('left'));
if (currentLeft>(600)) {

  $('.offer-items').css('left', (currentLeft - 400) + 'px ');
}
})

$('#left-offer').click(function() {
var currentLeft = parseInt($('.offer-items').css('left'));
if(currentLeft<=(1100-400)){
  $('.offer-items').css('left', (currentLeft + 400) + 'px');
}
})















function n3xt(text, element) {
  var sample = document.querySelector(element);
  if (sample.dataset.animating === 'true') return;
  var sampleH = 50; // will keep it fixed, otherwise sample.offsetHeight
  var sampleT = sample.textContent; // old text
  var sampleNT = text; // new text
  sample.dataset.animating = 'true';
  sample.style.height = sampleH + 'px';

  // original text element
  var samO = document.createElement('div');
  samO.style.transformOrigin = '0 ' + sampleH / 2 + 'px -' + sampleH / 2 + 'px';
  samO.classList.add('t3xt');
  samO.textContent = sampleT;

  // new text element
  var samN = samO.cloneNode();
  samN.textContent = sampleNT;
  sample.textContent = '';
  sample.appendChild(samO);
  sample.appendChild(samN);

  samO.classList.add('t3xt-out');
  samN.classList.add('t3xt-in');

  samN.addEventListener('animationend', function (event) {
    sample.removeChild(samO);
    sample.removeChild(samN);
    sample.textContent = sampleNT;
    sample.dataset.animating = 'false';
  });
}


var phraseIndex = 1;
var wordIndex = 0;
var t3xts = [
["Offers", "People´s choice"],
["Buy now!", "Winners of the week"],
["Today until friday", "Vote your Favorite!"],
["Members get a 15% discount.","People´s choice"],
["Black Friday","Winners of the week"],
["20% discount in Bethesda games", "Vote your Favorite!"],
["Don´t wait any longer!", "Try the best games"]];


// start it off
setTimeout(changetext, 100);

function changetext() {
  if (wordIndex >= 2) {
    wordIndex = 0;
    phraseIndex++;
  }
  if (phraseIndex >= t3xts.length) {
    phraseIndex = 0;
  }
  var term = t3xts[phraseIndex][wordIndex];
  n3xt(term, '.t3xt-' + ++wordIndex);

  if (wordIndex == 2) {
    setTimeout(changetext, 2000);
  } else {
    setTimeout(changetext, 150);
  }
}



$(".dropdown-menu li a").click(function(ev){
  ev.preventDefault();
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});





});
