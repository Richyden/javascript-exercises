(function() {

    // your code here

    document.getElementById("run").addEventListener("click", function() {

        var password = document.getElementById("pass-one").value;
        var password_verif = document.getElementById("pass-two").value;

        if (password_verif !== password) {
            document.getElementById("pass-one").style.borderColor = "red";
            document.getElementById("pass-two").style.borderColor = "red";
        }
        else if (password_verif === password) {
            document.getElementById("pass-one").style.borderColor = "green";
            document.getElementById("pass-two").style.borderColor = "green";
        }
    })
})();