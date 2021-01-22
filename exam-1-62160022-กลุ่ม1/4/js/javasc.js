//ตัวแปรฟังก์ชัน
var score = 0,
    highScore = 0,
    time = 20,
    timer;

var IsPlaying = false;
var timeBoard = document.getElementById('time'),
    scoreBoard = document.getElementById('score'),
    btnStart = document.getElementById('btn');


//ฟังก์ชันเริ่มเกม ถ้าไม่กดที่ play game จะไม่เริ่มทำงาน
function fallDown(apple) {
    if (!(IsPlaying && apple instanceof HTMLElement)) {
        return;
    }
    //เก็บตำแหน่งของแอปเปิ้ล
    apple.setAttribute('data-top', apple.style.top);
    //ตำแหน่งที่แอปเปิ้ลร่วงลงมาจากต้น
    apple.style.top = "500px";
    //ลูกละ 3 คะแนน
    score = score + 3;
    renderScore();
    hideFallenApple(apple);
}


function hideFallenApple(apple) {
    // ต้องรอจนกว่าแอปเปิ้ลจะตกลงมา
    // ดังนั้นเราจะใช้ฟังก์ชัน setTimeout รอและซ่อนแอปเปิ้ล
    setTimeout(function () {
        apple.style.display = 'none';
        //เรียกใช้ฟังก์ชัน ที่จะย้ายแอปเปิ้ลไปด้านบนแล้วแสดงแอปเปิ้ลอีกครั้งใน 500=0.5วินาที
        restoreFallenApple(apple);
    }, 500);
}


function restoreFallenApple(apple) {
    //ทำให้แอปเปิ้ลปรากฏออกมา 500ช0.5วินาที
    apple.style.top = apple.getAttribute('data-top');
    setTimeout(function () {
        apple.style.display = 'inline-block';
    }, 500);
}

//โชว์สกอล
function renderScore() {
    scoreBoard.innerText = score;
    if (score > highScore) {
        highScore = score;
    }
}

//ฟังก์ชันทำให้เกมเริ่มได้
function startGame() {
    btnStart.disabled = "disabled";
    IsPlaying = true;
    renderScore();
    //นับถอยหลัง
    timer = setInterval(countDown, 1000);
}

//ตับนับถอยหลัง
function countDown() {
    //นับถอยทีละ1
    time = time - 1;
    timeBoard.innerText = time;
    if (time == 0) {
        clearInterval(timer);
        endGame();
    }
}

//จบเกม
function endGame() {
    IsPlaying = false;
    alert("Score = " + score);
    //reset score และ เวลา
    score = 0;
    time = 20;
    //รีเซ็ตทั้งหมดแล้วกลับมาเริ่มเล่นใหม่ได้
    btnStart.removeAttribute('disabled');
}