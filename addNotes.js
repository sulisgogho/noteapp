const btnAdd = document.querySelector("#btn-add");
const btnSave = document.querySelector("#btn-save");
const inputTitle = document.querySelector("#input-title");
const inputNotes = document.querySelector("#input-notes");

const addNote = () => {
  window.location.href = "addNotes.html";
};

const editIndex = localStorage.getItem("editIndex");
const editIndexNumber = editIndex !== null ? parseInt(editIndex) : null;

if (editIndexNumber !== null) {
  const notes = JSON.parse(localStorage.getItem("listItem")) || [];
  const note = notes[editIndexNumber];
  if (note) {
    inputTitle.value = note.titleNotes;
    inputNotes.value = note.listNotes;
  }
}

btnAdd.addEventListener("click", addNote);

btnAdd.addEventListener("mouseenter", () => {
  btnAdd.classList.add("cursor-pointer", "hover:scale-110", "transition", "duration-200");
});

btnSave.addEventListener("mouseenter", () => {
  btnSave.classList.add("cursor-pointer", "hover:scale-110", "transition", "duration-200");
});

btnSave.addEventListener("click", () => {
  const titleNotes = inputTitle.value;
  const listNotes = inputNotes.value;
  const noteData = { titleNotes, listNotes, createdAt: new Date().toISOString() };

  let notes = JSON.parse(localStorage.getItem("listItem")) || [];

  if (editIndexNumber !== null) {
    notes[editIndexNumber] = noteData;
    localStorage.removeItem("editIndex");
  } else {
    notes.push(noteData);
  }

  localStorage.setItem("listItem", JSON.stringify(notes));
  alert("Note sudah tersimpan!!");
  window.location.href = "index.html";
});
