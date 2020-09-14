const daysE1 = document.getElementById("days");
const hoursE1 = document.getElementById("hours");
const minutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");

const birthday = "25 Sep 2020";

function countdown() {

    const bdDate = new Date(birthday);
    const currentDate = new Date();

    const Totalseconds = (bdDate - currentDate)/1000;

    const days = Math.floor(Totalseconds / 3600 / 24);
    const hours = Math.floor(Totalseconds/ 3600) % 24;
    const minutes = Math.floor(Totalseconds / 60) % 60;
    const seconds = Math.floor(Totalseconds) % 60;

    daysE1.innerHTML = days;
    hoursE1.innerHTML = formatTime(hours);
    minutesE1.innerHTML = formatTime(minutes);
    secondsE1.innerHTML = formatTime(seconds);

    console.log(days, hours, minutes, seconds);
}

function formatTime(time) {
    return time < 10 ? (`0 ${time}`) : time;
}
//initial call
countdown();

setInterval(countdown, 1000);