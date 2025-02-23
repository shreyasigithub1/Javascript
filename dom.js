const firstHead =document.querySelector("h1");
        console.log(firstHead);
        console.log(document.querySelector(".second"));
        console.log(document.querySelector("#para"));

const getId=document.getElementById("para");
console.log(getId);

const getClass=document.getElementsByClassName("first");
console.log(getClass);

const getTag=document.getElementsByTagName("h1");
console.log(getTag);


//Creating an element

const btn=document.createElement("button");
btn.textContent="Click here";
btn.className="btnclass";

const division=document.querySelector("div");
division.appendChild(btn);//It will append inside the div, to the bottom


// creating a new div
const newdiv=document.createElement("div");
//selecting the body
const body=document.querySelector("body");
//appending the div to the body
body.appendChild(newdiv);
//styling the div
newdiv.style.backgroundColor="red";
newdiv.textContent="New div";

const paraInsideDiv=document.createElement("p");
newdiv.appendChild(paraInsideDiv);
paraInsideDiv.textContent="New paragraph";