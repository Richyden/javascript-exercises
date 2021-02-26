/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    async function hero() {
        try {
            const api = await fetch("http://localhost:3000/heroes");
            const data = await api.json();

            return data;
        }catch (error) {
            console.error(error);
        }
    }

    let tab_heroes = hero();

    document.getElementById("run").addEventListener("click", function() {
        function erased(data) {
            const id_input = document.querySelector("#hero-id").value;

            data.forEach((element, pos) => {
                if(element.id == id_input) {
                    data.splice(pos, 1);
                }
            });

            if(id_input.length == 0) {
                alert("Empty :/");
            }
        }
        
        tab_heroes.then(data => {
            erased(data);
            console.log(data);
        })
    })
})();
