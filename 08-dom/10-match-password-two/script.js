(function() {

    // your code here
    var password = document.getElementById("pass-one").value;
    var password_verif = document.getElementById("pass-two").value;

    document.getElementById("run").addEventListener("click", function () {
        if (password_verif !== password) {
            document.querySelector("#pass-one").classList.add("error");
            document.querySelector("#pass-two").classList.add("error");
        }
    })
})();