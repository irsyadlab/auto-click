// Start time in seconds in s
const startTime = 5;

// Pause between burst in s
const pauseTime = 6;

export default function startTimer(element, callback) {
    let timeCounter = startTime;

    const startInterval = setInterval(() => {
        element.innerText = `Auto click in ${ timeCounter }s`;

        if(timeCounter <= 0) {
            element.innerText = `Object clicked!`;

            callback(pauseTime);
            clearInterval(startInterval);
        }

        timeCounter--;
    }, 1000);
}
