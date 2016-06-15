$(document).ready(function() {
  var src;
  $("a.fade").click(function(e){
    e.preventDefault();

    src = $(this).attr('href');

    $('body').fadeOut(400, newPage);

  });

  function newPage() {
    window.location = src;
  }

  $(window).bind('pageshow', function(event) {
    if (event.originalEvent.persisted) {
        window.location.reload()
    }
  });

  $(window).unload(function () { $(window).unbind('unload'); });

  // var api = "/api.json";
  //
  // $.ajax({
  //   type: "GET",
  //   dataType: 'json',
  //   url: api,
  //   crossDomain : true,
  //   xhrFields: {
  //       withCredentials: true
  //   }
  // }).done(function( data ) {
  //   $('.artist').text(data.artist);
  //   $('.song').text(data.song);
  //   $('.steps').text(data.steps);
  // }).fail( function(xhr, textStatus, errorThrown) {
  //   console.log(errorThrown);
  // });

});
