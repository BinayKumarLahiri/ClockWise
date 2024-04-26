// document.addEventListener('onload',()=>{
//     document.body.style.width = window.innerWidth + 'px';
//     document.body.style.height = window.innerHeight + 'px';
//     console.log(window.innerWidth,",",window.innerHeight);
// })
function set() {
    document.body.style.width = window.innerWidth + 'px';
    document.body.style.height = window.innerHeight + 'px';
    console.log(window.innerWidth,",",window.innerHeight);
    if(window.innerWidth<575) {
        document.querySelector('.container').style.width = window.innerWidth + 'px';
        document.querySelector('.container').style.height = window.innerHeight + 'px';
    }
}
function clear() {
    const btns = document.querySelectorAll("i");
    btns.forEach(btn=>{
        btn.style.backgroundColor = "var(--nav)";
    })
}
document.getElementById("stop").addEventListener('click',()=>{
    document.querySelector(".activebox").classList.remove("activebox");
    document.querySelector(".stopBox").classList.add("activebox");
    clear();
    document.getElementById("stop").style.backgroundColor = "var(--background)";
})
document.getElementById("clock").addEventListener('click',()=>{
    document.querySelector(".activebox").classList.remove("activebox");
    document.querySelector(".clockBox").classList.add("activebox");
    clear();
    document.getElementById("clock").style.backgroundColor = "var(--background)";
})
document.getElementById("timer").addEventListener('click',()=>{
    document.querySelector(".activebox").classList.remove("activebox");
    document.querySelector(".timerBox").classList.add("activebox");
    clear();
    document.getElementById("timer").style.backgroundColor = "var(--background)";
})