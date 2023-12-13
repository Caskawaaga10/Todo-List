const inputBox = document.querySelector("#input-box")
const listContainer = document.querySelector("#list-container")

document.querySelector("#btn").addEventListener("click",()=>{
  if(inputBox.value === ''){
    alert("Your must write something")
  }else{
    let li = document.createElement("li")
    li.innerText = inputBox.value
    listContainer.appendChild(li)
  }
})

// document.querySelector("#btn").