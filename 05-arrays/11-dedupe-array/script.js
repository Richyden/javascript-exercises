
(function() {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here

    console.log(fruits);

    var tab_duplic = [];

    document.getElementById("run").addEventListener("click", function() {
        for (var i = 0; i < fruits.length; i++) {
        
            var dup = fruits[i];
    
            tab_duplic.push(dup);
        }

        console.log(tab_duplic);
    })

})();