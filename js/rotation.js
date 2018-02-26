// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Time calculations for seconds
    var seconds = Math.floor((now % (1000 * 60)) / 1000);

    // Decide the color rotation
    if(seconds % 2 == 0) {
        document.getElementById("content").style.color= "#e48485";
        document.getElementById("content").style.backgroundColor = "#a8dfff";
    }

    if(seconds % 2 != 0) {
        document.getElementById("content").style.color= "#a8dfff";
        document.getElementById("content").style.backgroundColor = "#e48485";
    }
}, 1000);