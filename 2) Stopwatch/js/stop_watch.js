// const playButton = document.querySelector(".play")
// const lapButton = document.querySelector(".lap")
// const resetButton = document.querySelector(".reset")
// const lapclearAll = document.querySelector(".clear")
// const minute = document.querySelector(".min")
// const second = document.querySelector(".sec")
// const centisecond = document.querySelector(".msce")
// const laps = document.querySelector(".laps")

// let isplay = false;
// let secCounter = 0;
// let min;
// let sec;
// let centisec;
// let centiCounter = 0;
// let minCounter = 0;
// let isreset = false;
// let lap_item=0;

// const toggleButton = () => {
//     lapButton.classList.remove("hidden")
//     resetButton.classList.remove("hidden")
// }


// const play = () => {
//     if (!isplay & !isreset) {
//         playButton.innerHTML = 'Pause';

//         min = setInterval(() => {
//             minute.innerHTML = `${++minCounter} :`;
//         },60* 1000);
//         sec = setInterval(() => {
//             if (secCounter === 60) {
//                 secCounter = 0;
//             }
//             second.innerHTML = `&nbsp;${secCounter++} :`;
//         }, 1000);
//         centisec = setInterval(() => {
//             if (centiCounter === 100) {
//                 centiCounter = 0;
//             }
//             centisecond.innerHTML = `&nbsp;${++centiCounter} `;
//         }, 10);
//         isplay = true;
//         isreset = true;
//     }
//     else {
//         playButton.innerHTML = 'Play';
//         clearInterval(min);
//         clearInterval(sec);
//         clearInterval(Centisec);
//         isplay = false;
//     }
//     toggleButton();
// }

// const reset = () => {
//     isreset = true;
//     play();
//     lapButton.classList.add("hidden")
//     resetButton.classList.add("hidden")
//     second.innerHTML = '&nbsp;0 :';
//     centisecond.innerHTML = '&nbsp;0';
//     minute.innerHTML = '0 :';
// }

// const lap =()=>{
//     const li = document.createElement("li");
//     const number = document.createElement("span");
//     const timeStamp = document.createElement("span");

//     li.setAttribute("class","lap_item");
//     number.setAttribute("class","number");
//     timeStamp.setAttribute("class","time_stamp");

//     number.innerText = `#${++lap_item}`;
//     timeStamp.innerHTML = `${minCounter} :${secCounter} : ${secCounter}`;

//     li.append(number ,timeStamp);
//     li.append(li);
//     lapclearAll.classList.remove("hidden");
    
// }

// const clearAll=()=>{
//     laps.innerHTML = '';
//     laps.append(lapclearAll);
//     lapclearAll.classList.add("hidden");

// }
// playButton.addEventListener('click', play);
// resetButton.addEventListener('click', reset);
// lapButton.addEventListener('click',lap);
// lapclearAll.addEventListener('click',clearAll);

const playButton = document.querySelector(".play");
const lapButton = document.querySelector(".lap");
const resetButton = document.querySelector(".reset");
const lapclearAll = document.querySelector(".clear");
const minute = document.querySelector(".min");
const second = document.querySelector(".sec");
const centisecond = document.querySelector(".msce");
const laps = document.querySelector(".laps");
const bg = document.querySelector(".outer_circle");

let isplay = false;
let secCounter = 0;
let minCounter = 0;
let centiCounter = 0;
let interval;

const toggleButton = () => {
    lapButton.classList.toggle("hidden");
    resetButton.classList.toggle("hidden");
};

const play = () => {
    if (!isplay) {
        playButton.innerHTML = 'Pause';
        bg.classList.add("animation-bg");
        interval = setInterval(() => {
            centiCounter++;
            if (centiCounter === 100) {
                centiCounter = 0;
                secCounter++;
                if (secCounter === 60) {
                    secCounter = 0;
                    minCounter++;
                }
            }
            minute.innerHTML = `${minCounter} :`;
            second.innerHTML = `&nbsp;${secCounter} :`;
            centisecond.innerHTML = `&nbsp;${centiCounter}`;
        }, 10);
    } else {
        playButton.innerHTML = 'Play';
        clearInterval(interval);
        bg.classList.remove("animation-bg");
    }
    isplay = !isplay;
    toggleButton();
};

const reset = () => {
    clearInterval(interval);
    isplay = false;
    minCounter = 0;
    secCounter = 0;
    centiCounter = 0;
    minute.innerHTML = '0 :';
    second.innerHTML = '&nbsp;0 :';
    centisecond.innerHTML = '&nbsp;0';
    toggleButton();
};

const lap = () => {
    const li = document.createElement("li");
    li.innerHTML = `#${laps.children.length + 1} - ${minute.innerText}${second.innerText}${centisecond.innerText}`;
    laps.appendChild(li);
    lapclearAll.classList.remove("hidden");
};

const clearAll = () => {
    laps.innerHTML = '';
    lapclearAll.classList.add("hidden");
};

playButton.addEventListener('click', play);
resetButton.addEventListener('click', reset);
lapButton.addEventListener('click', lap);
lapclearAll.addEventListener('click', clearAll);
