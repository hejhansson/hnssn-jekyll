$(".anchor").click(function(e){
  e.preventDefault();

  var this_offset = $(this).offset();
  var that_id     = $(this).attr("href");
  var that_offset = $(that_id).offset();
  var offset_diff = Math.abs(that_offset.top - this_offset.top);

  var base_speed  = 1000; // Time in ms per 1,000 pixels
  var speed       = (offset_diff * base_speed) / 1000;

  $("html,body").animate({
    scrollTop: that_offset.top
  }, speed);
});


var $contactForm = $('#contact-form');
var $btn = $('.form-btn');
$contactForm.submit(function(e) {
	e.preventDefault();

  var name = $('[name="namn"]').val();
  var email = $('[name="email"]').val();
  var text = $('[name="vad"]').val();
  if(!name || !email || !text) {
    document.getElementsByClassName('error-message')[0].style.display = 'block';

    if(!name) {
      $('[name="namn"]').css('background', 'rgb(251, 217, 210)');
    }
    else {
      $('[name="namn"]').css('background', 'white');
    }
    if(!email) {
      $('[name="email"]').css('background', 'rgb(251, 217, 210)');
    }
    else {
      $('[name="email"]').css('background', 'white');
    }

    if(!text) {
      $('[name="vad"]').css('background', 'rgb(251, 217, 210)');
    }
    else {
      $('[name="vad"]').css('background', 'white');
    }
  }
  else {
  	$.ajax({
  		url: '//formspree.io/alexander@hnssn.se',
  		method: 'POST',
  		data: $(this).serialize(),
  		dataType: 'json',
      beforeSend: function(){
        $(".form-btn").val('Skickar...');
      },
  		success: function(data) {
        $('.error-message').hide();
        document.getElementById('contact-form').style.display = 'none';
        document.getElementById('form-sent').style.display = 'block';
  		},
  		error: function(err) {
  			console.log(err);
  		}
  	});
  }
});
