
(() => {
    class Animal {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        static get greeting(){
            return "";
        }
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    class Cat extends Animal {
        static get greeting(){
            return "Miaou";
        }
    }

    class Dog extends Animal {
        static get greeting(){
            return "Wouf";
        }
    }
    // your code here

    cat = new Cat("Mr_T", 8);
    dog = new Dog("Chipounette", 13);

    document.getElementById("run").addEventListener("click", function() {
        console.log(cat.sayHello());
        console.log(dog.sayHello());
    })
})();