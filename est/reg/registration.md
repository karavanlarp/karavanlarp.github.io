---
layout: default-est
title: Registreerumine
---
## Registreerumine

<!--- <p id="countdown"></p>
<button onclick="toggleShow()" id="hidebutton">Peida loendus</button> --->

[Siin](https://docs.google.com/forms/d/e/1FAIpQLSfgDVTRiQmYsUOY4vi9EtELAXvTpxZmhDM9U1UZsJEaU2WlKw/viewform) saab registreeruda mängule. 

[Siin](/est/events/caravan5.html) on täpsem informatsioon tuleva mängu kohta. 

Sellele saadame vastuseks maksuinfo ja kui mängumaks on tasutud, oletegi registreerunud. Pidage meeles, et pärast mängumaksu tähtaja möödumist ei saa me enam mängumaksu tagastada. 

Pärast maksmist saadame teile ka edasist infot, kuidas oma tegelast luua või arendada (või NPCde puhul, milliseid tegelasi pakume).

<script>
var countDownDate = new Date("Aug 25, 2019 23:59:59").getTime();

//https://www.w3schools.com/howto/howto_js_countdown.asp
var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = "<h4>Registreerumise lõpuni jäänud: " + days + "p " + hours + "h "
  + minutes + "m " + seconds + "s </h4>";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Registreerumine lõppenud";
  }
}, 1000);

function toggleShow() {
  var x = document.getElementById("countdown");
  var y = document.getElementById("hidebutton");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.textContent  = "Peida loendus";
	
  } else {
    x.style.display = "none";
    y.textContent  = "Näita loendust";
  }
} 
</script>
