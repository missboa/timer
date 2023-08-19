document.title = "Timer";
const content = document.getElementById("container");

const updateTime = () => {
    const time = new Date();
    let hour = time.getHours().toString().padStart(2, "0");
    let status = true;
    if (hour > 12) {
        hour -= 12;
        hour = hour.toString().padStart(2, "0");
        status = false;
    } else if (hour == 0) {
        hour = 12;
        hour = hour.toString().padStart(2, "0");
    }
    const minute = time.getMinutes().toString().padStart(2, "0");
    const second = time.getSeconds().toString().padStart(2, "0");
    const displayTime = `${hour}:${minute}:${second} ${status ? "AM" : "PM"}`;
    content.innerHTML = displayTime;
    document.title = displayTime;
};

updateTime();
setInterval(updateTime, 1000);

window.addEventListener("keydown", (event) => {
    if (event.key === "f" || event.key === "F") {
        if (document.fullscreenElement) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        } else {
            document.documentElement.requestFullscreen();
        }
    }
});

content.addEventListener("dblclick", () => {
    console.log("hello");
    if (document.fullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    } else {
        document.documentElement.requestFullscreen();
    }
});

let timeOut;
const hideCursor = () => {
    content.style.cursor = "none";
};
const showCursor = () => {
    content.style.cursor = "default";
};
const resetTimer = () => {
    clearTimeout(timeOut);
    timeOut = setTimeout(hideCursor, 3000);
    showCursor();
};

window.addEventListener("contextmenu", (event) => {
    event.preventDefault();
});

window.addEventListener("mousemove", resetTimer);
resetTimer();
