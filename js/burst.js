const btnClick = document.getElementById('btn-click');
let timer = 5;

function updateInformation() {
    btnClick.innerText = `Auto click in ${timer}s`;
}

function updateTimer() {
    timer -= 1;
    if(timer <= 0) {
        burstUpdate();
        clearInterval(intervalFunc);
    };

    updateInformation();
}

function burstUpdate() {
    const url = btnClick.getAttribute('href');
    const openedWindow = window.open(url);

    setTimeout(() => {
        openedWindow.close();
        burstUpdate();
    }, 6000);
}

const intervalFunc = setInterval(() => {
    updateTimer();
}, 1000);

updateInformation();
