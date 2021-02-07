
(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    var day = new Date();
    var hour = day.getHours();

    if(hour < 18){
        document.getElementById("target").innerHTML = "Hello!"
    }
    else if (hour >= 18 && hour < 22){
        document.getElementById("target").innerHTML = "Good evening!"
    }
    else{
        document.getElementById("target").innerHTML = "Good night!"
    }
})();