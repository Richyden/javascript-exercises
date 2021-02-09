(function() {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    // your code here

    document.getElementById("run").addEventListener("click", function() {
        var pomme = fruits.includes("apple");

        console.log(pomme);
    })
})();