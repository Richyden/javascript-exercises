
(function() {

    // your code here
    document.getElementById("run").addEventListener('click', function() {
        var num = document.getElementById("color").value;
        document.body.style.backgroundColor = ("#" + num);
    });
})();