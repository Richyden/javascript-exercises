(function() {

    // your code here
    var table = document.createElement("table");
    document.querySelector("#target").appendChild(table);

    for(var cpt_col = 1; cpt_col < 11; cpt_col++) {
        var column = document.createElement("tr");
        document.querySelector("table").appendChild(column);

        for(var cpt_row = 1; cpt_row = 11; cpt_row++) {
            var row = document.createElement("td");
            column.appendChild(row).innerHTML = cpt_col * cpt_row;
        }
    }
})();
