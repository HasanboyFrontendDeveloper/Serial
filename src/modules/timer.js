function timer(id, deadline){
    // Timer


    function getTimeRemaining(endtime){
        const timer = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(timer / (1000 * 60 * 60 * 24)),
            hours = Math.floor((timer / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((timer / (1000 * 60)) % 60),
            seconds = Math.floor((timer / 1000) % 60);

        return {timer, days, hours, minutes, seconds}
    }

    function getZero(num){
        if(num >= 0 && num < 10){
            return `0${num}`
        }else if(num <= 0){
            return 0;
        }else{
            return num;
        }
    }

    function getClock(selector, endtime){
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        

        function updateClock(){
            const t = getTimeRemaining(endtime)

            days.innerHTML = getZero(t.days)
            hours.innerHTML = getZero(t.hours)
            minutes.innerHTML = getZero(t.minutes)
            seconds.innerHTML = getZero(t.seconds)

            if(t.timer <= 0){
                clearInterval(timeInterval)
            }
        }
    }

    getClock(id, deadline)
}

export default timer