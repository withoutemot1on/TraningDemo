
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



async function showItems() {
  let image = "";
  const res = await fetch('selectData.php', {
    method: "Get",
    headers: {
      "Content-Type": "application/json"
    }
  })
  const output = await res.json();

  for(let i in output) {
    console.log(output[i]);
    console.log(output[i].name);
    image+= 
    `<img class='img' src='\images/${output[i][`foto-before`]}'  width="300" heigth="300" 
    onclick="changeImg(${(output[i][`foto-after`])})">`
  }

  document.querySelector('.card').innerHTML = image;
}

showItems()

function changeImg(imageAfter) {
 console.log(imageAfter)
}










