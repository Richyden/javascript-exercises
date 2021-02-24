/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
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

            posts.forEach((element) => {
                async function comments() {
                    const comments = await window.lib.getComments();
                    element.comments = comments;
                }
                comments();
            })
        }

        async_test(); // appel de la fonction.
    })
})();
