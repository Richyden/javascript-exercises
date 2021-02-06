var dialog_rep;

while (dialog_rep !== true) {
    var age = prompt("What is your age ?");
    var gender = prompt("What is your gender ?");
    var town = prompt("What City do you live in ?");

    dialog_rep = confirm("You have " + age + " years old, your gender is " + gender + " and you live in " + town + ". Is that correct ?");
    
}