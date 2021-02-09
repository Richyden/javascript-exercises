(() => {

    class Person {
        constructor (firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        get name() {
            return `${this.firstname} ${this.lastname}`;
        }

        set name(string) {
            const tab_string = string.split(' ');
            this.firstname = tab_string[0];
            this.lastname = tab_string[1];
        }
    }

    // your code here

    document.getElementById("run").addEventListener("click", function() {
        var person = new Person("Richard", "Denys");
        console.log(person.name);

        person.name = "Drahcir Snyed";
        console.log(person);
    })
})();