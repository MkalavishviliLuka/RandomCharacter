//Random key and prompt
var randKey;
var time;
//Game elements
var myp = document.getElementById('myp')
var mykey = document.getElementById('key')
//Time
var mytime = document.getElementById('time')

//Speed
// var howfast = prompt()

//Score
var score = 0;

var numbers = 0;
var one = 1;

//BUTTONS
var b = document.getElementById('b')
var m = document.getElementById('m')
var h = document.getElementById('h')

b.addEventListener('click', function () {
    document.body.removeChild(b)
    document.body.removeChild(m)
    document.body.removeChild(h)
    time = prompt('How long can you play? (Type in seconds)')
    myp.innerHTML = "You Score:" + score
    mytime.innerHTML = time + " seconds left"
    var speed = 1000;
    //Getting random numbers in interval
    var randInt = setInterval(() => {
        randKey = Math.round(Math.random() * (90 - 65) + 65)
        numbers++;
        mykey.innerHTML = String.fromCharCode(randKey)
    }, speed);
    //Interval for seconds
    var timeInt = setInterval(() => {
        time--
        mytime.innerHTML = time + 1 + " seconds left"
        if (time == -1) {
            clearInterval(randInt)
            clearInterval(timeInt)
            alert('You have scored: ' + score + '/' + (numbers - 1))
            window.location.reload()
        }
    }, 1000);
})
m.addEventListener('click', function () {
    document.body.removeChild(b)
    document.body.removeChild(m)
    document.body.removeChild(h)
    time = prompt('How long can you play? (Type in seconds)')
    myp.innerHTML = "You Score:" + score
    mytime.innerHTML = time + " seconds left"
    var speed = 700;
    //Getting random numbers in interval
    var randInt = setInterval(() => {
        randKey = Math.round(Math.random() * (90 - 65) + 65)
        numbers++;
        mykey.innerHTML = String.fromCharCode(randKey)
    }, speed);
    //Interval for seconds
    var timeInt = setInterval(() => {
        time--
        mytime.innerHTML = time + 1 + " seconds left"
        if (time == -1) {
            clearInterval(randInt)
            clearInterval(timeInt)
            alert('You have scored: ' + score + '/' + (numbers - 1))
            window.location.reload()
        }
    }, 1000);
})
h.addEventListener('click', function () {
    document.body.removeChild(b)
    document.body.removeChild(m)
    document.body.removeChild(h)
    time = prompt('How long can you play? (Type in seconds)')
    myp.innerHTML = "You Score:" + score
    mytime.innerHTML = time + " seconds left"
    var speed = 500;
    //Getting random numbers in interval
    var randInt = setInterval(() => {
        randKey = Math.round(Math.random() * (90 - 65) + 65)
        numbers++;
        mykey.innerHTML = String.fromCharCode(randKey)
    }, speed);
    //Interval for seconds
    var timeInt = setInterval(() => {
        time--
        mytime.innerHTML = time + 1 + " seconds left"
        if (time == -1) {
            clearInterval(randInt)
            clearInterval(timeInt)
            alert('You have scored: ' + score + '/' + (numbers - 1))
            window.location.reload()
        }
    }, 1000);
})

//Event listener
document.body.addEventListener('keydown', function () {
    if (event.keyCode == randKey) {
        score++
        myp.innerHTML = "You Score:" + score
    }
})