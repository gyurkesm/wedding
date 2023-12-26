// Set the date we're counting down to
let weddingDate = new Date("Aug 17, 2024 16:00:00");
countdown(weddingDate);
let daysSinceMet = countfrom(new Date("Aug 24, 2019").getTime());
document.getElementById("days-since-met").innerHTML = daysSinceMet + " napja";

// Update the count down every 1 second
let x = setInterval(countdown(weddingDate), 1000 * 60);

function countdown(in_time) {
  // Get today's date and time
  let now = new Date().getTime();
  const timeChange = new Date("2024.03.31 02:00");

  // Find the distance between now and the count down date
  let distance = in_time.getTime() - now;
  if (now < timeChange) {
    distance = distance + 1000 * 60 * 60;
  }
  let day_r = 0;
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const monthLens = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const eventMonth = in_time.getMonth();
  let i_days = [0];
  for (let i = 1; i < 13; i++) {
    if (eventMonth - i < 0) {
      j = monthLens.length + (eventMonth - i);
    } else {
      j = eventMonth - i;
    }
    i_days.push(i_days[i - 1] + monthLens[j]);
  }
  let month = 0;
  for (let i = 0; i < i_days.length; i++) {
    if (days < i_days[i]) {
      month = i - 1;
      days = days - i_days[i - 1];
      break;
    }
  }

  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  let oneweek = 1000 * 60 * 60 * 24 * 7;
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

  document.getElementById("remain-date").innerHTML =
    month + " hónap " + days + " nap ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}

function countfrom(in_time) {
  let now = new Date().getTime();
  let distance = in_time - now;
  let days = Math.abs(Math.floor(distance / (1000 * 60 * 60 * 24)));
  return days;
}
