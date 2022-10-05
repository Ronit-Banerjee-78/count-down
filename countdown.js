const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");



const newTime = new Date('Oct 19, 2023 00:00:00').getTime();


function upadteTime() {
    const currentTime = new Date().getTime();
    const durga = newTime - currentTime;


    const d = Math.floor(durga / (1000 * 60 * 60 * 24));
    const h = Math.floor(durga / 1000 / 60 / 60) % 24;
    const m = Math.floor(durga / 1000 / 60) % 60;
    const s = Math.floor(durga / 1000) % 60;

    // console.log(d);
    // console.log(h);
    // console.log(m);
    // console.log(s);

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? "0" + h : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;

}

setInterval(upadteTime, 1000);
