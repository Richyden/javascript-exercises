
(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        var num = document.getElementById("numbers").value;
        var tri = num.split(",");

        alert(tri.sort(function (a, b) {
            return a - b;
            })
        );
    });

})();