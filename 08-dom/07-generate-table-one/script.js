(function() {

    var tab_jdr = [
        "Cthulhu",
        "The Witcher",
        "Star Wars",
        "Dungeon and Dragon",
        "Knight",
        "Pathfinder",
        "Légende des Cinq Anneaux",
        "Pandemonuim",
        "Chill",
        "Le Règne Du Silence",
    ];

    // your code here
    var target = document.getElementById("target");

    var table = document.createElement("table");
    var thead = document.createElement("tr");
    var row = document.createElement("th");

    thead.innerHTML = "RPG for table";

    row.appendChild(thead);
    table.appendChild(row);

    for (let i = 0; i < tab_jdr.length; i++) {
        
        var row = document.createElement('tr');
		var td = document.createElement('td');
		td.innerText = tab_jdr[i];

		row.appendChild(td);
		table.appendChild(row);
    }

    target.appendChild(table);

})();