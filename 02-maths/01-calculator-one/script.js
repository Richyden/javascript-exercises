(function calculator() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        var res = parseInt(document.getElementById("op-one").value) + parseInt(document.getElementById("op-two").value);

        alert(res);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        var res = parseInt(document.getElementById("op-one").value) - parseInt(document.getElementById("op-two").value);

        alert(res);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        var res = parseInt(document.getElementById("op-one").value) * parseInt(document.getElementById("op-two").value);

        alert(res);
    });

    document.getElementById("division").addEventListener("click", function() {
        var res = parseInt(document.getElementById("op-one").value) / parseInt(document.getElementById("op-two").value);

        alert(res);

    });

    
})();