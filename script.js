// Decalaring and Initialzing the variables
var hour = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;

// Method to start
function start() {
    timer = true;
    document.getElementById("timer-background").style.backgroundColor = "coral";
    document.getElementById("start").style.transform = "scale(1.3,1.3)";
    document.getElementById("stop").style.transform = "scale(1,1)";
    document.getElementById("reset").style.transform = "scale(1,1)";
    stopwatch();
}

// Method to stop
function stop() {
    timer = false;
    document.getElementById("timer-background").style.backgroundColor = "yellow";
    document.getElementById("stop").style.transform = "scale(1.3,1.3)";
    document.getElementById("start").style.transform = "scale(1,1)";
    document.getElementById("reset").style.transform = "scale(1,1)";
    stopwatch();
}

// Method to reset the timer
function reset() {
    timer = false;
    document.getElementById("timer-background").style.backgroundColor = "red";
    document.getElementById("reset").style.transform = "scale(1.3,1.3)";
    document.getElementById("stop").style.transform = "scale(1,1)";
    document.getElementById("start").style.transform = "scale(1,1)";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hour").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
}

// method to perform such tasks
function stopwatch() {
    if (timer) {
        // If timer is true 
        // Incrementing the count
        count += 1;
        // If second is greater than 100 then second will be increamented by 1
        if (count == 100) {
            sec += 1;
            count = 0;
        }

        // If second is greater than 60 then minute will be increamented by 1
        if (sec == 60) {
            min += 1;
            sec = 0;
        }

        // If minute is greater than 60 then hour will be increamented by 1
        if (min == 60) {
            hour += 1;
            min = 0;
        }

        // Here we are convert the integer to string so that we can display the format like 00hr 00min 00sec 00
        var hourString = hour;
        var minString = min;
        var secString = sec;
        var countString = count;

        // If the hour is less than 0 then it will display the hour like 00, 01, 02 and so on
        if (hour < 10) {
            hourString = "0" + hourString;
        }

        // If the minutes is less than 0 then it will display the minutes like 00, 01, 02 and so on
        if (min < 10) {
            minString = "0" + minString;
        }

        // If the seconds is less than 0 then it will display the seconds like 00, 01, 02 and so on
        if (sec < 10) {
            secString = "0" + secString;
        }

        // If the count is less than 0 then it will display the count like 00, 01, 02 and so on
        if (count < 10) {
            countString = "0" + countString;
        }

        // manipulating the html content using DOM and put the value of hour, minute, seconds and count as a string
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("hour").innerHTML = hourString;
        document.getElementById("count").innerHTML = countString;
        // It will run until the timer is false
        setTimeout("stopwatch()", 10);
    }
}