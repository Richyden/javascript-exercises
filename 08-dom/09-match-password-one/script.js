(function() {

    // your code here

    var password = document.getElementById("pass-one").value;
    var password_verif = document.getElementById("pass-two").value;

    document.getElementById("run").addEventListener("click", function() {
        if (password !== password_verif) {
            document.getElementById("pass-one").style.borderColor = "red";
            document.getElementById("pass-two").style.borderColor = "red";
        }
        else if (password === password_verif) {
            document.getElementById("pass-one").style.borderColor = "green";
            document.getElementById("pass-two").style.borderColor = "green";
        }
    })
})();