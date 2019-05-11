//making socket connection
var socket = io();

//DOM
var led1 = document.getElementById('led1');
var led2 = document.getElementById('led2');
var led3 = document.getElementById('led3');
var led4 = document.getElementById('led4');
var userCount = document.getElementById('userCount');

var ledArr = [0,0,0,0];

//on start and for changes too
socket.on('start', (led) => {
    ledArr = led.slice();
    led1.checked = ledArr[0];
    led2.checked = ledArr[1];
    led3.checked = ledArr[2];
    led4.checked = ledArr[3];
});

//leds on change
led1.addEventListener("change", () => {
    ledArr[0] = Number(led1.checked);
    socket.emit('change', ledArr);
});
led2.addEventListener("change", () => {
    ledArr[1] = Number(led2.checked);
    socket.emit('change', ledArr);
});
led3.addEventListener("change", () => {
    ledArr[2] = Number(led3.checked);
    socket.emit('change', ledArr);
});
led4.addEventListener("change", () => {
    ledArr[3] = Number(led4.checked);
    socket.emit('change', ledArr);
});

//on users change
socket.on('usersCount', (data) =>{
    userCount.innerHTML = data+'';
    console.log(data);
    
});
