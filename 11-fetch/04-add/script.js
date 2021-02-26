/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
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
        function new_hero(data) {
            const name_input = document.querySelector("#hero-name").value;
            const alter_input = document.querySelector("#hero-alter-ego").value;
            const abilities_input = document.querySelector("#hero-powers").value;

            if(name_input.length != 0 && alter_input.length != 0 && abilities_input.length != 0) {
                data.push({
                    "id": data.length + 1,
                    "name": name_input,
                    "alterEgo": alter_input,
                    "powers": [abilities_input]
                });
            }else {
                alert("Please, don't leave an empty input.");
            }
        }

        tab_heroes.then(data => {
            new_hero(data);
            console.log(data);
        });
    })
})();
