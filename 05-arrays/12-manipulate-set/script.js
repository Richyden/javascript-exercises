(() => {
    const fruits = new Set([
        "apple",
        "pear",
        "strawberry",
        "tomato",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grape",
        "cherry",
    ]);

    // your code here

    console.log(fruits);

    document.getElementById("run").addEventListener("click", function() {

        fruits.delete("apple");
        fruits.delete("cerise");

        fruits.add("banana");
        fruits.add("kiwi");

        console.log(fruits);
    })
})();