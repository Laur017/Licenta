const countDownDateTime = new Date (2022,4,29,15,0,0).getTime();
const minutesValue = document.querySelector("#minutes");
const secondsValue = document.querySelector("#seconds");

let x = setInterval(function(){
    const dateTimeNow = new Date().getTime();
    let difference = countDownDateTime - dateTimeNow;

    minutesValue.innerHTML = Math.floor((difference% (1000*60*60)) / (1000 * 60));
    secondsValue.innerHTML = Math.floor((difference% (1000*60)) / 1000);

    if (difference < 0 ){
        clearInterval(x);
    }


},1000)
