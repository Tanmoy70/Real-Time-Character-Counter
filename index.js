const textareaE1 = document.querySelector("textarea");

const totalCounterE1 = document.querySelector("#total-counter");

const remainingCounterE1 = document.querySelector("#remaining-counter");


textareaE1.addEventListener("keyup", ()=> {
    updateCounter();
})


function updateCounter(){
    totalCounterE1.innerText = textareaE1.value.length;
    remainingCounterE1.innerText = textareaE1.getAttribute("maxLength") - textareaE1.value.length;

}