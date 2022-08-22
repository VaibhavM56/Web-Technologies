let login = () => {
    console.log("function");
    let email = document.getElementById("email").value;
    console.log(email);
    let password = document.getElementById("password").value;
    console.log(password);
    if(email === "" && password === ""){
        alert("please enter the values");
    }else{
        alert("log in successful")
    }
};