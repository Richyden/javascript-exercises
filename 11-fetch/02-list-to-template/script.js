/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    const template = document.querySelector("#tpl-hero");
    const target = document.querySelector("#target");

    document.getElementById("run").addEventListener("click", function() {

        async function list_heroes() {
            const api = await fetch("http://localhost:3000/heroes");
            const data = await api.json();

            data.forEach(({name, alterEgo, abilities}) => {

                const copy = template.cloneNode(true).content;

                copy.querySelector(".name").textContent = name;
                copy.querySelector(".alter-ego").textContent = alterEgo;
                copy.querySelector(".powers").textContent = abilities.join('. ');

                target.appendChild(copy);
            })
        }

        list_heroes();
    })
})();
