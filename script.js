let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");


let ha = document.getElementById("ha");


function inputLength() {
    return input.value.length
}

function createElement() {
    let alert = document.createElement("div");
    alert.appendChild(document.createTextNode(input.value));
    alert.className = "col-11 alert alert-primary";
    ha.appendChild(alert);
    
    input.value = "";

    function isDone() {
        alert.className = "alert color col-11";
        
    }
    
    alert.addEventListener("click", isDone);
    

   

    
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);