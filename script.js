const nums = document.querySelectorAll(".num");
const display = document.querySelector("#display");

function addToDisplay(){
    const variable = this.textContent;
    display.value += variable;
}

function clearDisplay() {
    display.value = '';
}

for(let num of nums){
    num.addEventListener("click", addToDisplay);
}

document.querySelector(".clear").addEventListener("click", clearDisplay);



