(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here

        var image = document.querySelector("img");
        var cpt = 0;

        document.querySelector("button").addEventListener("click", function () {
            cpt++;

            if(cpt >= gallery.length) {
                cpt = 0;
            }

            image.src = gallery[cpt];
            console.log(image.src);

        })
})();