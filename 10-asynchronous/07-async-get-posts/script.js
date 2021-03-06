/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById('run').addEventListener('click', function() {

        async function async_test() {  //bloc l'execution du code asynchrone jusqu'à ce quil retourne un résultat

            const posts = await window.lib.getPosts(); //attend les résultats de la fonction
            console.log(posts);
        }

        async_test(); // appel de la fonction.
    })
})();
