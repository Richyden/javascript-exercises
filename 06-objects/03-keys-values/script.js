(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };
    // your code here

    document.getElementById("run").addEventListener("click", function () {
        
        console.log(Object.keys(person));
        console.log(Object.values(person));
    })
})();