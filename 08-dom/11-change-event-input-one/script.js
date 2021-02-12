(function() {

    // your code here
    document.getElementById("pass-one").addEventListener("input", function () {
        var password = document.getElementById("pass-one").value;

        document.getElementById("pass-one").maxLength = 10;
        document.getElementById("counter").innerHTML = `${password.length} / 10`;
    })
})();