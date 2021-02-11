(function() {

    var fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    // your code here

    document.getElementById("run").addEventListener("click", function() {
        for (let i = 0; i < fruits.length; i++) {
            console.log(fruits[i]);
        }
    })

})();