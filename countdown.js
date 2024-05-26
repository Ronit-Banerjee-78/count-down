const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");



const newTime = new Date('Oct 8, 2024 00:00:00').getTime();
const maaKali= new Date('Oct 30, 2024 00:00:00').getTime();

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
function updatetime(){
    const currentTime = new Date().getTime();
    const kali=maaKali-currentTime



    const kd = Math.floor(kali / (1000 * 60 * 60 * 24));
    const kh = Math.floor(kali / 1000 / 60 / 60) % 24;
    const km = Math.floor(kali / 1000 / 60) % 60;
    const ks = Math.floor(kali / 1000) % 60;

    day.innerHTML = kd;
    hour.innerHTML = kh < 10 ? "0" + kh : kh;
    minute.innerHTML = km < 10 ? "0" + km : km;
    second.innerHTML = ks < 10 ? "0" + ks : ks;
}

setInterval(upadteTime, 1000);
setInterval(updatetime, 1000);
