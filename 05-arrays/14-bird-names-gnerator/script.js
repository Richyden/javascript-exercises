(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here

    document.getElementById("run").addEventListener("click", function() {

        var cpt_bird = parseInt(Math.random() * 12);
        var cpt_adj = parseInt(Math.random() * 11);

        tab_adj = Array.from(adjectives);

        var adj_fem = "";

        if(birds[cpt_bird].fem) {
            adj_fem = "e";
        }

        var bird = birds[cpt_bird].name + " " + tab_adj[cpt_adj] + adj_fem;

        document.getElementById("target").innerHTML = bird;
    })
})();