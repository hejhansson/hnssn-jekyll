var url = 'https://api.forecast.io/forecast/43f19489529ed6c8a31a12b48fa82071/56.9060,12.4953?exclude=hourly,minutely,daily,flags,alerts'

$(document).ready(function() {
  var src
  $("a.fade").click(function(e){
    e.preventDefault()
    src = $(this).attr('href')
    $('body').fadeOut(400, newPage)
  });

  function newPage() {
    window.location = src
  }

  $(window).bind('pageshow', function(event) {
    if (event.originalEvent.persisted) {
        window.location.reload()
    }
  });

  $(window).unload(function () { $(window).unbind('unload') })

  $.ajax({
    type: "GET",
    dataType: 'jsonp',
    crossDomain : true,
    xhrFields: {
        withCredentials: true
    },
    url: url,
  }).done(function(data) {
    var weather = data.currently.icon,
        weatherToDisplay = ''

    switch (weather) {
      case 'rain':
        weatherToDisplay = 'regniga'
      break;

      case 'clear-day':
        weatherToDisplay = 'soliga'
      break;

      case 'clear-night':
        weatherToDisplay = 'soliga'
      break;

      case 'snow':
        weatherToDisplay = 'snöiga'
      break;

      case 'sleet':
        weatherToDisplay = 'snöblandade'
      break;

      case 'wind':
        weatherToDisplay = 'blåsiga'
      break;

      case 'fog':
        weatherToDisplay = 'dimmiga'
      break;

      case 'cloudy':
        weatherToDisplay = 'molniga'
      break;

      case 'partly-cloudy-day':
        weatherToDisplay = 'halvmuliga'
      break;

      case 'partly-cloudy-night':
        weatherToDisplay = 'halvmuliga'
      break;

      default:
        weatherToDisplay = 'härliga'
    }

    $('.weather').html(weatherToDisplay)
  })


});
