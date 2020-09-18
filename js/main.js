

// Target time
                            //Make this user input
var targetDate = new Date("September 19, 2020 15:50:00").getTime();


// Setting interval for refresh *WRAPS TO INDENT*
var i = setInterval(function() {
    // Current time
    var currentDate = new Date().getTime();

    // Time remaining
    var remainingTime = targetDate - currentDate;

    // Conversion from ms
    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        // Adds zeros to prevent jarring effect
        minutes = checkTime(minutes);
        seconds = checkTime(seconds);        

// Add zeros function
function checkTime(t) {
    if (t < 10) {
        return "0" + t;
    }
    else {
        return t;
    }
}

// Output to html
// Display based on how much time is left
/// Prevents from not showing hours when it is 1d, 00h, 20m left
if (hours + days < 1) {
    document.getElementById("remainder").innerHTML = minutes + " minutes " + seconds + " seconds ";
} else if (minutes + hours + days < 1) {
    document.getElementById("remainder").innerHTML = seconds + " seconds ";
} else if (days < 1) {
    document.getElementById("remainder").innerHTML = hours + " hours " + minutes + " minutes " + seconds + " seconds ";
} else {
    document.getElementById("remainder").innerHTML = days + " day " + hours + " hours " + minutes + " minutes " + seconds + " seconds ";
}

// Timer complete display message
if (days + hours + minutes + seconds == 0) {
    clearInterval(i);
    document.getElementById("remainder").innerHTML = "TIMER COMPLETE"
}

// End of setInterval
}, 1000);

