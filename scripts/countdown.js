// Set the date we're counting down to
var weddingDate = new Date("Aug 17, 2024 16:00:00").getTime()
countdown(weddingDate);
var daysSinceMet = countfrom(new Date("Aug 24, 2019").getTime());
document.getElementById("days-since-met").innerHTML = daysSinceMet + " napja";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const invname = urlParams.get('invname');
document.getElementById("inv-name").innerHTML = getName();

// Update the count down every 1 second
var x = setInterval(countdown(weddingDate), 1000*60);

function countdown (in_time) {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = in_time - now;
  var month = 0;
  var day_r = 0;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  
  if (days >= 274){
    month = 9;
    days = days - 274;
  } else if (days >= 244){
    month = 8;
    days = days - 244;
  } else if (days >= 213) {
    month = 7;
    days = days - 213;
  } else if (days >= 182) {
    month = 6;
    days = days - 182;
  } else if (days >= 153) {
    month = 5;
    days = days - 153;
  } else if (days >= 122) {
    month = 4;
    days = days - 122;
  } else if (days >= 92) {
    month = 3;
    days = days - 92;
  } else if (days >= 61) {
    month = 2;
    days = days - 61;
  } else if (days >= 31) {
    month = 1;
    days = days - 31;
  }
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  var oneweek = 1000 * 60 * 60 * 24 * 7;
  if (distance > oneweek) {
    document.getElementById("time1").innerHTML = month;
    document.getElementById("timedim1").innerHTML = "Hónap";
    document.getElementById("time2").innerHTML = days;
    document.getElementById("timedim2").innerHTML = "Nap";
    document.getElementById("time3").innerHTML = hours;
    document.getElementById("timedim3").innerHTML = "Óra";
    document.getElementById("time4").innerHTML = minutes;
    document.getElementById("timedim4").innerHTML = "Perc";
  } else {
    document.getElementById("time1").innerHTML = days;
    document.getElementById("timedim1").innerHTML = "Nap";
    document.getElementById("time2").innerHTML = hours;
    document.getElementById("timedim2").innerHTML = "Óra";
    document.getElementById("time3").innerHTML = minutes;
    document.getElementById("timedim3").innerHTML = "Perc";
    document.getElementById("time4").innerHTML = month;
    document.getElementById("timedim4").innerHTML = "Másodperc";
  }

  document.getElementById("remain-date").innerHTML = month + " hónap " + days + " nap ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}

function countfrom(in_time) {
  var now = new Date().getTime(); 
  var distance = in_time - now;
  var days = Math.abs(Math.floor(distance / (1000 * 60 * 60 * 24)));
  return days;
}

function getName() {
  if (invname == 'GyurkesZoltan') {
    return "Papi!";
  } else if (invname == 'LorinczFerenc') {
    return "Feri!";
  } else {
    return "Barátunk/Rokonunk!"
  }

}