
(function() {

    // your code here

    var getImg = document.querySelector("#source").getAttribute("data-image");
    var img = document.createElement("img");

    img.setAttribute("src", getImg);

    document.querySelector("#target").appendChild(img);
})();