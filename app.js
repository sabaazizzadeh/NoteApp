document.addEventListener("DOMContentLoaded", loadNotes);

function saveNote() {
    const noteInput = document.getElementById("noteInput").value;
    if (noteInput.trim() === "") {
        alert("Please enter a note.");
        return;
    }
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(noteInput);
    localStorage.setItem("notes", JSON.stringify(notes));
    document.getElementById("noteInput").value = "";
    loadNotes();
}

function loadNotes() {
    const notesContainer = document.getElementById("notesContainer");
    notesContainer.innerHTML = "";
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach((note, index) => {
        const noteElement = document.createElement("div");
        noteElement.classList.add("note");
        noteElement.innerHTML = `${note} <button onclick="deleteNote(${index})">Delete</button>`;
        notesContainer.appendChild(noteElement);
    });
}

function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes();
}
