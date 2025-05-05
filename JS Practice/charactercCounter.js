const textElement = document.getElementById("textArea");
const submitButton = document.getElementById("submitButton");
const divElement = document.getElementById("formdiv");
const paragraphDiv = document.getElementById("paragraphDiv");

submitButton.addEventListener("click", function (e) {
    
    e.preventDefault();
    console.log(textElement.value);
    paragraphDiv.innerHTML = "";
    const paragraph = document.createElement("p");
    paragraph.textContent = `You have entered ${(textElement.value).length} characters`
    paragraphDiv.append(paragraph);
    divElement.append(paragraphDiv);
    textElement.value = "";
    
    
    
})