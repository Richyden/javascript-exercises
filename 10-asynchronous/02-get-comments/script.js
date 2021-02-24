/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", function() {

        window.lib.getPosts(function target_posts(error, array) {
            array.forEach(function target_comments(element) {
                window.lib.getComments(element.id, (error, comments) => {
                    element.comments = comments;
                })
            })

            console.log(array);
        })
    })
})();
