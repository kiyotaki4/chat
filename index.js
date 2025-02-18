const button = document.getElementById("btn");
const input = document.getElementById("input");
const newItems = document.getElementById("new-items");
// ебаный document
button.addEventListener("click",function(){
    if(input.value==="") return; //input.value лучше использовать
    const newBox = document.createElement("div"); //создал див в переменную newBox
    newBox.textContent = input.value;
    newItems.appendChild(newBox);
    input.value="";
})