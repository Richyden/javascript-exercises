(function() {

    // your code here
    document.getElementById("pass-one").addEventListener("input", function() {
        let password = document.querySelector("#pass-one").value;
        let regex = ('(?=(.*\\d){2})[a-zA-Z0-9]{8,}');
        let SATANUS = password.match(regex);

        console.log((SATANUS));

        if(SATANUS == null) {
            document.getElementById('validity').innerHTML = 'Nope';
        }
        else {
            document.getElementById('validity').innerHTML = 'Ok';
        }
    })

    /* \d = nombre, \w = caractères \W = carac <> a-z  \s = espace */

})();