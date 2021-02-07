
(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    var day = new Date();
    var hour = day.getHours();
    var minute = day.getMinutes();
    var time = hour * 60 + minute;

    if (time >= 1050) {
        document.getElementById("target").innerHTML = "Good evening!";
    }
    else{
        document.getElementById("target").innerHTML = "Hello!";
    }
})();