(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    var date = new Date();
    var n = date.toDateString();
    var time = date.toLocaleTimeString();

    document.getElementById("target").innerHTML = n + time;
})();