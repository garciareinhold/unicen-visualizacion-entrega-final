$( document ).ready(function() {

  //////NAV
     $('.leftmenutrigger').on('click', function(e) {
       e.preventDefault();
     $('.side-nav').toggleClass("open");
     $('[rel="popover"]').popover('hide')
    });


    // $('#open-popover-link').popover({
    //     container:'body',
    //     placement: 'bottom',
    //     html: true,
    //     content: function() {
    //     	return $('#popover-container').html();
    //     },
    // });
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

$('#ex1').slider( function(value) {
  console.log("entre");
		return 'Current value: ' + value;
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





});
