let timer;
let isRunning = false;
let elapsedTime = 0; 
let lapTimes = [];

function startstop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startstopBtn").textContent = "Start";
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById("startstopBtn").textContent = "Stop";
    }
    isRunning = !isRunning;
}

function updateTime() {
    elapsedTime++;
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;

    document.getElementById("timedisplay").textContent =
        formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function resetstopwatsh() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    lapTimes = [];
    document.getElementById("timedisplay").textContent = "00:00:00";
    document.getElementById("startstopBtn").textContent = "Start";
    document.getElementById("Laplist").innerHTML = "";
}

function recordlap() {
    if (isRunning) {
        const hours = Math.floor(elapsedTime / 3600);
        const minutes = Math.floor((elapsedTime % 3600) / 60);
        const seconds = elapsedTime % 60;

        const lapTime = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
        lapTimes.push(lapTime);

        const lapItem = document.createElement("li");
        lapItem.textContent = "Lap " + lapTimes.length + ": " + lapTime;
        document.getElementById("Laplist").appendChild(lapItem);
    }
}