(function () {

    // your code here
    let baseImage = document.querySelector('img');
    let image1 = baseImage.getAttribute('src');
    let image2 = baseImage.getAttribute('data-hover');

    baseImage.addEventListener('mouseover', () => {
        baseImage.setAttribute('src', image2)
    });
    baseImage.addEventListener('mouseout', () => {
        baseImage.setAttribute('src', image1)
    });
})();