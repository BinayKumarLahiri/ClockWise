let Hour = 0;
let Minute = 0;
let Second = 0;
let Time = 0;
let totaltime = 0;
let timer;
let paused = false;
function Timer() {
    timer = setInterval(()=>{
        if(Time==1){
            clearInterval(timer);
            document.querySelector(".visible").classList.remove("visible");
            document.querySelector(".timechoser").classList.add("visible");
            alert("Timer Completed");
        }
        Time -= 1;
        let t = Time;
        let h = Math.floor(t/3600);
        t = t%3600;
        let m = Math.floor(t/60);
        t = t%60;
        let s = t;
        let deg = 360-(Time/totaltime)*360;
        document.getElementById('timertime').innerText = `${(h<10)?"0"+h:h} : ${(m<10)?"0"+m:m} : ${(s<10)?"0"+s:s}`
        document.getElementById('range').style.background = `conic-gradient(var(--shadow) ${deg}deg, var(--background) 0deg)`
        console.log(`${h} : ${m} : ${s}`);
    },1000);
}
document.getElementById("start").addEventListener('click',()=>{
    document.querySelector(".visible").classList.remove("visible");
    document.querySelector(".timerDisplay").classList.add("visible");
    if(paused) {
        paused = false;
    }else{
    Hour = document.getElementById('h').value;
    Minute = document.getElementById('m').value;
    Second = document.getElementById('s').value;
    Time = (Hour*3600) + (Minute*60) + (Second*1);
    totaltime = Time;
    }
    Timer();
})
document.getElementById("reset").addEventListener('click',()=>{
    document.querySelector(".visible").classList.remove("visible");
    document.querySelector(".timechoser").classList.add("visible");
    clearInterval(timer);
    Hour = 0;
    Minute = 0;
    Second = 0;
    Time = 0;
    totaltime = 0;
})

document.getElementById("pause").addEventListener('click',()=>{
    clearInterval(timer);
    paused = true;
})