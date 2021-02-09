(function() {

    // your code here

    document.getElementById("run").addEventListener("click", function() {

        var tab = [];

        for (var i = 0; i < 10; i++) {
            var number = Math.floor(Math.random()*100);
            document.getElementById("n-" + (i + 1)).innerHTML = number;

            tab.push(number);
        }

        var min = Math.min(...tab);
        var max = Math.max(...tab);
        var sum = tab.reduce((a, b) => { return a + b;});
        var average = sum/tab.length;

        document.getElementById("min").innerHTML = min;
        document.getElementById("max").innerHTML = max;
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = average;
    })

})();