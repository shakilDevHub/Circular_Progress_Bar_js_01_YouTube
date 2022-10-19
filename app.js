let circle = document.querySelector(".circle");
let circleNum = document.querySelector(".circle span");

let count = 0;

let countAnim = setInterval(()=>{
    count++;
    
    //Text
    circleNum.innerText = count + "%";

    //Circle
    circle.style.background = `conic-gradient(
        #2ecc71 ${count}%,
        transparent 0
    )`

    
    if(count>=100){
        clearInterval(countAnim);
    }

}, 10);