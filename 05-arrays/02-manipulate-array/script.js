(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    //var lastItem = fruits[fruits.length - 1];

    // your code here

    //Version ONE - Not the most optimisated

    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
        
    }

    document.getElementById("run").addEventListener("click", function() {
        fruits[0] = "Banana";
        fruits[fruits.length - 1] = "Kiwi";

        for (let i = 0; i < fruits.length; i++) {
            console.log(fruits[i]);
            
        }
    });
})();