const btnClick = document.getElementById('btn-click');
let timer = 5;

function updateInformation() {
    btnClick.innerText = `Auto click in ${timer}s`;
}

function updateTimer() {
    timer -= 1;
    if(timer <= 0) btnClick.click();

    updateInformation();
}

updateInformation();
setInterval(() => {
    updateTimer();
}, 1000);