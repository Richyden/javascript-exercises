/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    function callback(error, array) { //demande les paramètres error et array. Tous les deux présents dans les libs.
        console.log(error);
        console.log(array);
    };

    document.getElementById('run').addEventListener('click', function () {
        window.lib.getPosts(callback); //appel de la fonction callback. Grâce à la librairie, les vars "error" et "array" sont pris en compte et "remplies".
        //getPosts() -> après un certain temps (ici 1s), il renvoie une valeur null suivie d'un tableau généré aléatoirement
    });
})();