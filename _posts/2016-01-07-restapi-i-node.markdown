---
layout: post
title:  "Simpelt REST-api i node.js"
date:   2016-01-07 12:39:56 +0100
categories: blogg
---

Ja, välkommen hem till mig. Idag hade jag tänkt att skriva ihop en liten guide hur man sätter upp ett simpelt REST-api i node tillsammans med express. Jag kommer att anta att du inte har node installerat på datorn och gå igenom hur man installerar detta och sedan hur man sätter upp ett projekt. Nivån på denna guide kommer vara typ—”Jag kan lite javascript och tycker att det är roligt. Jag har hört talas om nodejs och skulle vilja testa det någon gång.” Känner du igen dig i den förra meningen så fortsätt att läsa. Om du läser samma mening och istället tänker ”Jag är en jävel på javascript och har testat nodejs innan” så ska du nog inte fortsätta läsa. Du kommer nog inte lära dig så mycket nytt. API:t vi kommer att skriva kommer endast använda oss av GET-metoder, vi kommer inte använda oss av någon databas eller POST-metoder. Så API:t i sig kommer inte att kunna göra så mycket.

## Vad är ett REST-api?
Så, vad är egentligen ett REST-api? Representational State Transfer är det som ligger bakom förkortningen REST. Enkelt så handlar det om HTTP-anrop mot en URI. Kommandona som man använder är `POST`, `GET`, `PUT` och `DELETE`. `POST` skickar data. `GET` hämtar data. `PUT` uppdaterar. `DELETE` raderar.
T.ex. om jag gör ett `GET`-anrop till min URI som är `http://mindomän.se/produkter` så visar jag att jag vill hämta data från URI:n.

## Installera Nodejs
Nu börjar det roliga. Nu ska vi installera Node.js. Börja med att gå till [https://nodejs.org/en/download/](https://nodejs.org/en/download/) och ladda ner installationsfilen till ditt operativsystem.



{% highlight javascript %}
// random pokemon
app.get('/pokemon/random', function(req, res) {
  var id = Math.floor(Math.random() * pokemons.length);
  var q = pokemons[id];
  res.json(q);
});
{% endhighlight %}


{% highlight terminal %}
$ node app.js
{% endhighlight %}
