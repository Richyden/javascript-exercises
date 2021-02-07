(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function() {
        var day, month, x, fiday;
        
        var tabMonth = new Array();
        var tab = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        var date = new Date();
        var time = date.getFullYear();

        var year = document.getElementById("year").value;

        for (let i = 1; i <= 12; i++) {
            if (i < 10) {
                x = new Date(year + "-0" + i + "-13");
            }
            else {
                x = new Date(year + "-" + i + "-13");
            }

            day = x.getDay();

            if (day == 5) {
                month = x.getMonth();
                tabMonth.push(tab[month]);
            }
        }

        if (year < time) {
            friday = "was/were";
        }
        else if (year == time) {
            friday = "is/are";
        }
        else {
            friday = "will be";
        }

        alert("Friday the 13th " + friday + " in " + year + ": \n" + tabMonth.join("\n"));
    })
})();