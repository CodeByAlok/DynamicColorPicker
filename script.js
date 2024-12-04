const colorPicker= document.getElementById("color");
const selectedColor = document.getElementById("selectedColor");
const btn = document.querySelector('#btn');

colorPicker.addEventListener("input", (onclick)=>{
    selectedColor.textContent=`Selected Color: ${event.target.value}`;
});




btn.addEventListener("click",()=>{
    document.body.style.backgroundColor=colorPicker.value;
})