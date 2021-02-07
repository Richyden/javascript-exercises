(function() {

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        for (let i = 1; i < 22; i++) {
            var square = i*i;

            alert("The square of " + i + " is " + square);
            
        }

    });

})();