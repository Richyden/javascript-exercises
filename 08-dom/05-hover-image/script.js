(function() {

    // your code here

    const image = document.querySelector("img");
    const hover = image.getAttribute("data-hover").value;

    image.addEventListener("mouseover", () => {
        image.src = hover;
    });
})();