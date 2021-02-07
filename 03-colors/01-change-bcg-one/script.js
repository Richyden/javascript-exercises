(function() {

    // your code here
    document.getElementById("red").addEventListener('click', function() {
        document.body.style.backgroundColor = "#e00d0d";
    });

    document.getElementById("green").addEventListener('click', function() {
        document.body.style.backgroundColor = "#0de049";
    });

    document.getElementById("yellow").addEventListener('click', function() {
        document.body.style.backgroundColor = "#e4fc0f";
    });

    document.getElementById("blue").addEventListener('click', function() {
        document.body.style.backgroundColor = "#0f6efc";
    });
})();