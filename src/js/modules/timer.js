const timer = ()=>{

    const hours = document.querySelector('.buy-component__hours'),
    minutes = document.querySelector('.buy-component__minutes'),
    seconds = document.querySelector('.buy-component__seconds');

    let time = 1800;
   
    let timeInterval = setInterval(updateClock, 1000);

    function updateClock(){
        let minute = Math.floor(time / 60);
        let second = time % 60;

        second = second < 10 ? "0" + second :second;

        minutes.innerHTML = minute
        seconds.innerHTML = second;
        time--;

        if(minutes.innerHTML  <= 0 && seconds.innerHTML  <= 0 ){
            clearInterval(timeInterval)
        }
    }
}
export default timer;