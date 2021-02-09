
(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    // your code here

    var cat_one = new Cat("Skitty", 9);
    var cat_twoo = new Cat("Pixel", 6);

    document.getElementById("run").addEventListener("click", function() {
        console.log(cat_one);
        console.log(cat_twoo);
    })
})();