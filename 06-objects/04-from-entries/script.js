(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here

    var tab_objet = [];

    for (var i = 0; i < keys.length; i++) {
        tab_objet[keys[i]] = values[i];
    }

    document.getElementById("run").addEventListener("click", function() {
        console.log(tab_objet);
    })
})();