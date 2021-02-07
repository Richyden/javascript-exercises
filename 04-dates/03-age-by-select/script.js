(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function() {
        var dob_day = document.getElementById("dob-day").value;
        var dob_month = document.getElementById("dob-month").value;
        var dob_year = document.getElementById("dob-year").value;

        var date = new Date();
        var year = date.getFullYear();

        alert("You are " + (year - dob_year) + " years old!");
    })
})();