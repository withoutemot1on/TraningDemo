let updateButton = document.getElementById('Reg');
let favDialog = document.getElementById('favDialog');
let outputBox = document.querySelector('output');
let selectEl = document.querySelector('select');
let confirmBtn = document.getElementById('confirmBtn');

updateButton.addEventListener('click', function onOpen() {
  if (typeof favDialog.showModal === "function") {
    favDialog.showModal();
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
});
// selectEl.addEventListener('change', function onSelect() {
//   confirmBtn.value = selectEl.value;
// });
// favDialog.addEventListener('close', function onClose() {
//   outputBox.value = favDialog.returnValue + " button clicked - " + (new Date()).toString();
// });

// Слайдер картинок 

// let slide = document.querySelector('')


// slide.addEventListener('mouseover',function(e){

// })

// function hover(i){
//   i.src = i.database.before
// }
// function after(i){
//   i.src = i.database.after
// }

let img2 = document.querySelector('.img2')
document.querySelectorAll('.img').forEach(img => {
  img.addEventListener('mouseover',function(){
    this.src = 'images/1-2.jpg'
    // img.style.display = "none"
    // img2.style.display = "block" 
  })
})


let main = document.querySelector('.main')


async function ShowItems(){
await fetch('index.php').then(response =>{return response.text()}).then(text=>{
  main.innerHTML += text;
})
ShowItems();
}
console.log(1);