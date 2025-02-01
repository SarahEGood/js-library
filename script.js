const myLibrary = [];
const libContainer = document.getElementById('book-container');

function Book(title, author, summary) {
  this.title = title;
  this.author = author;
  this.summary = summary;
}

function addBookToLibrary(title, author, summary) {
    var newBook = new Book(title, author, summary);
    myLibrary.push(newBook);
    console.log(newBook);
    console.log(myLibrary);
}

function listLibrary(lib) {

    for (let i=0; i < lib.length; i++) {
        console.log(lib[i]);
        div = document.createElement('div');
        title = document.createElement('h2');
        author = document.createElement('h3');
        summary = document.createElement('p');

        div.className = 'card';
        title.innerHTML += lib[i].title;
        author.innerHTML += lib[i].author;
        summary.innerHTML += lib[i].summary;

        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(summary);

        libContainer.appendChild(div);

    }
}


document.getElementById('submit').addEventListener("click", function() {
    event.preventDefault();
    let title = document.getElementById('bTitle').value;
    let author = document.getElementById('bAuthor').value;
    let summary = document.getElementById('bSummary').value;

    if (title === "" || author === "" || summary === "") {
        alert("Must fill out all fields.");
    } else {
        document.getElementById("newbookform").reset();
        addBookToLibrary(title, author, summary);
        listLibrary(myLibrary);
    }
})