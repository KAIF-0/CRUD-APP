
let addBtn = document.getElementById('addbtn')
addBtn.addEventListener('click', (e)=>{
    if (parentList.children[0].className == "d-flex justify-content-center"){
        parentList.children[0].remove()
    }
    
let currentInput = e.currentTarget.previousElementSibling

let newLi = document.createElement("li")
// newLi.classList.add("list-group-item")
                    //OR
newLi.className = "list-group-item d-flex justify-content-between";
newLi.innerHTML = `<h3 class="flex-grow-1">${newLi.textContent = currentInput.value}</h3>
                <button id="edit" class="btn btn-warning mx-3" onclick="editChapter(this)">EDIT</button>
                <button id="remove" class="btn btn-danger" onclick="removeChapter(this)">REMOVE</button></li>`

parentList.appendChild(newLi)

},

function removeChapter(e){
    e.parentElement.remove()

    let parentList = document.getElementById("parentList")
    if(parentList.children.length <=0){
        let emptyMsg = document.createElement("h3") 
        emptyMsg.textContent = "Nothinf is here."
        emptyMsg.className = "d-flex justify-content-center";
        parentList.appendChild(emptyMsg)        
    }
})


let parentList = document.getElementById("parentList")

// function addChapter(e){

//     if (parentList.children[0].className == "d-flex justify-content-center"){
//         parentList.children[0].remove()
//     }
    
// let currentInput = e.currentTarget.previousElementSibling

// let newLi = document.createElement("li")
// // newLi.classList.add("list-group-item")
//                     //OR
// newLi.className = "list-group-item d-flex justify-content-between";
// newLi.innerHTML = `<h3 class="flex-grow-1">${newLi.textContent = currentInput.value}</h3>
//                 <button id="edit" class="btn btn-warning mx-3" onclick="editChapter(this)">EDIT</button>
//                 <button id="remove" class="btn btn-danger" onclick="removeChapter(this)">REMOVE</button></li>`

// parentList.appendChild(newLi)

// }

function removeChapter(e){
    e.parentElement.remove()

    let parentList = document.getElementById("parentList")
    if(parentList.children.length <=0){
        let emptyMsg = document.createElement("h3") 
        emptyMsg.textContent = "Nothinf is here."
        emptyMsg.className = "d-flex justify-content-center";
        parentList.appendChild(emptyMsg)        
    }
}


function editChapter(e){
   if(e.textContent == "DONE"){
     e.textContent = "EDIT"
     let currInput = document.createElement("h3");
     currInput.className = "flex-grow-1";
     currInput.textContent =  e.previousElementSibling.value
     e.parentElement.replaceChild(currInput, e.previousElementSibling)
   }else{
    e.textContent = "DONE"
   let currInput = document.createElement("input");
   currInput.type = "text"
   currInput.className = "form-control"
   currInput.placeholder = "Chapter Name"

   e.parentElement.replaceChild(currInput, e.previousElementSibling)
   }
}
