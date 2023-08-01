"use strict"



//타이머
//setInterval(함수, 딜레이)
//parseInt
//clearInterval()
let setTime = 10;
const timer = () => {
    const timerInterval = setInterval(() => {
        if(setTime === 10){
            document.getElementById("timer").innerHTML = "00:" + setTime;
        }
        else {
            document.getElementById("timer").innerHTML = "00:" + "0" + setTime;
        }
        setTime--;
        if(setTime < 0) {
            clearInterval(timerInterval);
            //lost 창 호출
        }
    }, 1000);
}






//스타트버튼 
//버튼이 pause로 바뀜
//카운터 함수 호출
//타이머 함수 호출
//벌레 무작위로 뿌리기
//당근 무작위로 뿌리기
const startBtn = document.querySelector('.startBtn');
startBtn.addEventListener('click', timer);



//카운터
let carrotNumber = "";





//Pause


//Lost

//Win


//Resume