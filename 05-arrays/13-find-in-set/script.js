(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    // your code here

    document.getElementById("run").addEventListener("click", function() {
        console.log(people.size);
        console.log(people.has("Alexandre"));
    })
})();