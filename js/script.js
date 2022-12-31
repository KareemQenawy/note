const addBox = document.querySelector(".add-box"),
plus = document.querySelector(".plus"),
plusTitle = plus.querySelector("header p"),
closeIcon = plus.querySelector("header i"),
titleTag = plus.querySelector("input"),
descriptionTag = plus.querySelector("textarea"),
addBtn = plus.querySelector("button");

const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];


const notes = JSON.parse(localStorage.getItem("notes") || "[]" );
let isUpdate = false,updateId;


addBox.addEventListener("click", ()=>{
    titleTag.focus();
    plus.classList.add("show");
})




closeIcon.addEventListener("click", () => {
    isUpdate = false;
    titleTag.value = "";
    descriptionTag.value = ""; 
    addBtn.innerText = "Add Note :)";
    plusTitle.innerText = "Add A New Note"; 
    plus.classList.remove("show");
});



function showNotes() {
    document.querySelectorAll(".note").forEach(note => note.remove());
    notes.forEach((note , index) => {
        let liTag =         ` <li class="note">
                                <div class="details">
                                <p>${note.title}</p>
                                <span>${note.description}</span>
                               </div>
                               <div class="bottom-content">
                               <span>${note.date}</span>
                               <div class="setting">
                                <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                                <ul class="menu">
                                <li onclick="updateNote(${index}, '${note.title}', '${note.description}')"><i class="uil uil-pen"></i>Edit</li>
                                <li onclick="deleteNote(${index})"><i class="uil uil-trash"></i>Delete</li>
                                </ul>
                          </div>
                          </div>
                          </li>`;
addBox.insertAdjacentHTML("afterend" , liTag);
    });
}
showNotes();


function showMenu(elem){
    elem.parentElement.classList.add("show");
    document.addEventListener("click", e=> {
    if(e.target.tagName != "I" || e.target !=elem){
        elem.parentElement.classList.remove("show");
    }
    });
}


 
function deleteNote(noteId) {
    let confirDel = confirm("Are you sure ?");
    if(!confirDel) return;
    notes.splice(noteId, 1);
    localStorage.setItem("notes" , JSON.stringify(notes));
    showNotes();
}


function updateNote(noteId, title, description) {
isUpdate = true;
updateId = noteId;
addBox.click();
titleTag.value = title;
descriptionTag.value = description;
addBtn.innerText = "Update Note";
plusTitle.innerText = "Update a Note";
console.log(noteId, title, description);
}











addBtn.addEventListener("click", e=>{
    e.preventDefault();
    let noteTitle = titleTag.value,
    noteDescription = descriptionTag.value;

    if(noteTitle || noteDescription) {
    let dateObj = new Date(),
    month = months[dateObj.getMonth()],
    day = dateObj.getDay(),
    year = dateObj.getFullYear();

    let noteText = {
        title: noteTitle, description: noteDescription,
        date : `${month} ${day}, ${year}`
    }

    if(!isUpdate){
        notes.push(noteText);
    } else {
        isUpdate = false;
        notes[updateId] = noteText;
    }


    localStorage.setItem("notes", JSON.stringify(notes));
    closeIcon.click();
    showNotes();


    }
});
