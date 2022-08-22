// Dom is a tree structure of the HTML elements
// 1.create a element dynamically
// 2.delete an element dynamically
// 3.we can render the dom elements into the browser by dom methods

//DOM methods
//.getElementById(),.getElementByClassName(),querySelector

const element = document.getElementById("demo");
console.log(element);

element.innerText="DOM"

//query selector method will return first tag which comes in the tree structure

const tagElement = document.querySelector("h1");
console.log(tagElement);

//class selecting by query selector
const classElement = document.querySelector(".firstH1");
console.log(classElement);

//class selector
//this will return multiple elements in an array
const classSelector1 = document.getElementsByClassName("test");
console.log(classSelector1);

const elements = document.getElementsByClassName("data");
console.log(elements.length);

for(let i = 0;i<elements.length;i++)
{
    if(i===0){
        elements[i].innerText="Nayana";
    }else if(i === 1){
        elements[i].innerText="S R";
    } else{
        elements[i].innerText="Bangalore";
    }

}


//getElement by tag name
//it will return an array

const tagElements = document.getElementsByTagName("p");
console.log(tagElements);

//it will return an array of elements
const dataElements = document.querySelectorAll(".data");
console.log(dataElements);

for(let i=0;i<dataElements.length;i++)
{
    dataElements[i].style.fontSize ="50px"
    dataElements[i].style.backgroundColor ="red"
    dataElements[i].style.color ="blue"
}

//creating an element in java script
const h1Element = document.createElement("h1");
h1Element.innerText = "this is my h1 tag created by javascript";
h1Element.style.color = "green";
h1Element.style.backgroundColor = "yellow";
console.log(h1Element);

document.body.appendChild(h1Element);