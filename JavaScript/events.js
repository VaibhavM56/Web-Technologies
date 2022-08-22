//events are some actions example:click,onChange,onHover
//event listener: javaScript functions

// function changeName(){
//     const element = document.getElementById("name");
//     element.innerText="Himagirish"
// }

function changeName(user){
    const element = document.getElementById("name");
    element.innerText=user;
}

//hover experiment in javascript

let changeColor=()=>{
    const element1 = document.getElementById("changeColor");
    element1.style.backgroundColor="red";
}

let removeColor = ()=>{
    const element = document.getElementById("changeColor");
    element.style.backgroundColor="white";
}

function setBodyAttr(attr,value){
    console.log(value);
    console.log(attr);
    if(document.body){
        document.body[attr] = value;
    }else{
        throw new Error("no support");
    }
}