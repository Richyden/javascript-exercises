
(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function(){
        var backrandom = '#' + parseInt(Math.random() * 0xffffff).toString(16);

        document.body.style.backgroundColor = backrandom;
    });
})();