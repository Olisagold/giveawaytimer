let endTime = new Date("Mar 18, 2024 11:30:00").getTime();

let time = setInterval(() => {
    let now = new Date().getTime();
    let timeleft = endTime - now;

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math. floor((timeleft % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math. floor((timeleft % (1000 * 60)) / 1000);
    let daysUI = document.querySelector(".days")
    daysUI.innerHTML = days
    let hoursUI = document.querySelector(".hours")
    hoursUI.innerHTML = hours
    let minutesUI = document .querySelector(".minutes")
    minutesUI.innerHTML = minutes
    let secondsUI = document.querySelector(".seconds")
    secondsUI.innerHTML = seconds
}, 1000)

