import './styles.css';

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector,
        this.targetDate = targetDate,
        this.refs = {
            days: document.querySelector('span[data-value="days"]'),
            hours: document.querySelector('span[data-value="hours"]'),
            mins: document.querySelector('span[data-value="mins"]'),
            secs: document.querySelector('span[data-value="secs"]')
        };
    }

    updateClockFace({ days, hours, mins, secs }) {
        this.refs.days.innerHTML = days;
        this.refs.hours.innerHTML = hours;
        this.refs.mins.innerHTML = mins;
        this.refs.secs.innerHTML = secs
    }
    startTimer() {
       
        setInterval(() => {
             this.currentData = Date.now();
            const deltaTime = this.targetDate - this.currentData;
            const summ = getTimeComponents(deltaTime);
            this.updateClockFace(summ);
        }, 1000)
    }

};

const timer = new CountdownTimer ({
    selector: '#timer-1',
    targetDate: new Date('Nov 27, 2020'),
});


timer.startTimer();


function pad(value) {
    return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return {days, hours, mins, secs};
}

