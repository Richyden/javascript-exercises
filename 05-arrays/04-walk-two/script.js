(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here

    var cpt = 0;

    function getFruit(item) {
        console.log(fruits[cpt]);

        cpt++;
    }

    document.getElementById("run").addEventListener("click", function() {
        fruits.forEach(getFruit);
    })

})();