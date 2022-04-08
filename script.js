//Creating array where books will be stored.
let myLibrary = [];

function book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

function addBookToLibrary() { 
}

//Modal Set-up
let modal = document.getElementById("modal");
let btn = document.getElementById("add-button");
let span = document.getElementsByClassName("close-modal")[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

btn.addEventListener("click", myFunction);

function myFunction()   {
    modal.style.display= "block";
}
