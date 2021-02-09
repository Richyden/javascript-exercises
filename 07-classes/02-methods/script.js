(() => {
    // your code here

    class Person{
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        sayHello(){
            console.log("Hello, " + this.firstname + " " + this.lastname);
        }
    }

    person1 = new Person("Richard", "Denys");

    document.getElementById("run").addEventListener("click", function() {
        console.log(person1.sayHello());
    })
})();