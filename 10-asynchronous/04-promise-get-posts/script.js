/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    //Quand j'appuie sur le bouton, lance le résolve de la fonction promise qui se trouve dans la fonction getPosts().

    document.getElementById("run").addEventListener("click", function() {
        window.lib.getPosts().then(function getPosts(array) {  //.then(), pour exécuter du code dès que la promise est résolue.
            console.log(array);
        })
    });
})();
