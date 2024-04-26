const time = document.getElementById('stoptime');
const reset = document.querySelector('.reset');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
let counter;
let ms = 0;
let s = 0;
let m = 0;
let h = 0;
start.addEventListener('click',()=>{
    counter = setInterval(()=>{
        ms = ms + 10;
        if(ms==100) {
            ms = 0;
            s = s + 1;
        }
        if(s == 60) {
            s = 0;
            m = m + 1;
        }
        if(m == 60) {
            m = 0;
            h = h + 1;
        }
        time.innerText = `${(h<10)?"0"+h:h} : ${(m<10)?"0"+m:m} : ${(s<10)?"0"+s:s}.${(ms<10)?"0"+ms:ms}`
    },100)
})
pause.addEventListener('click',()=>{
    clearInterval(counter);
})
reset.addEventListener('click',()=>{
    clearInterval(counter);
    time.innerText = "00 : 00 : 00.00";
    ms = 0;
    s = 0;
    m = 0;
    h = 0;
})