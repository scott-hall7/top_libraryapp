//Creating array where books will be stored.
let library = [];


//Events Detailed - Map

//1. When 'Add Button' is clicked, open modal/form. (Note: Need to fix required input issue.)
const modal = document.getElementById("modal");
const modalBtn = document.getElementById("add-button");

/*
function setRequired(val) {
  input = modal.getElementsByClassName("input");
  input.required = val;
}
*/

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    //setRequired(false);
  }
};

modalBtn.addEventListener("click", openModal);

function openModal(event) {
  modal.style.display = "block";
  //setRequired(true);
}

//Handles form now resetting page
let form = document.getElementById("modal-content");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


//2. Create object with inputs from form. 
function Book(title, author, pages, isRead, bookNumber) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

//3.Push object into array and give each object a datapoint. Closes modal and resets form.
function createBook() {
  let book = new Book(
    title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    pages = document.getElementById("pages").value,
    isRead = document.getElementById("isRead").checked,
  )
  library.push(book);
  console.log(library);

  
  const bookCard = document.createElement('div');
  bookCard.classList.add('book-card');
  booksGrid.appendChild(bookCard);



  let bookTitle = document.createElement("p")
  let bookAuthor = document.createElement("p");
  let bookPages = document.createElement("p");
  let bookIsRead = document.createElement("button");
  let bookRemove = document.createElement("button");

  console.log(book.isRead)
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookPages.textContent = book.pages;
  if (book.isRead == true) {
    bookIsRead.textContent = "Read";
  } else if (book.isRead == false) {
    bookIsRead.textContent = "Unread";
  }
  bookRemove.textContent = "Remove?";

  //Changes read status on button click.
  bookIsRead.addEventListener('click', () =>  {
    if (bookIsRead.textContent == "Read") {
      bookIsRead.textContent = "Unread";
    } else if (bookIsRead.textContent == "Unread") {
      bookIsRead.textContent = "Read";
  }});
  
  

  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPages);
  bookCard.appendChild(bookIsRead);
  bookCard.appendChild(bookRemove);
  clearForm();

  bookRemove.addEventListener('click', () =>  {
    let index = library.indexOf(book);
    library.splice(index, 1);
    bookCard.remove();
    console.log(library);
  });
};

const submitBtn = document.getElementById("submit-button");
submitBtn.addEventListener("click", createBook);

function clearForm()  {
  form.reset();
  modal.style.display = "none";
};


//4. Display object on the screen.
const booksGrid  = document.getElementById("booksGrid");


