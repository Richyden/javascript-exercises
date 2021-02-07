
(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        var num = document.getElementById("number").value;

        if (num < 0) {
            alert("Your number is a negatif number. So, here is the factorial for 0 : 1");
        }
        else if (num == 0 || num == 1) {
            alert("1");
        }
        else {
            for (let i = num - 1; i >= 1; i++){
                num = num * i;  
            }

            alert(num);
        }
    });

})();