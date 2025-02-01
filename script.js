const myLibrary = [];
const libContainer = document.getElementById('book-container');

function Book(title, author, summary, read=false) {
  this.title = title;
  this.author = author;
  this.summary = summary;
  this.read = read;
}

function addBookToLibrary(title, author, summary, read=false) {
    var newBook = new Book(title, author, summary, read);
    myLibrary.push(newBook);
}

function listLibrary(lib) {

    for (let i=0; i < lib.length; i++) {
        console.log(lib[i]);
        div = document.createElement('div');
        title = document.createElement('h2');
        author = document.createElement('h3');
        summary = document.createElement('p');
        read = document.createElement('div');

        div.className = 'card';
        title.innerHTML += lib[i].title;
        author.innerHTML += lib[i].author;
        summary.innerHTML += lib[i].summary;

        if (lib[i].read === true) {
            read.innerHTML = "Read";
        } else {
            read.innerHTML = "Unread";
        }

        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(summary);
        div.appendChild(read);

        libContainer.appendChild(div);

    }
}


document.getElementById('submit').addEventListener("click", function() {
    event.preventDefault();
    libContainer.innerHTML = "";

    let title = document.getElementById('bTitle').value;
    let author = document.getElementById('bAuthor').value;
    let summary = document.getElementById('bSummary').value;
    let read = document.getElementById('bRead').checked;

    if (title === "" || author === "" || summary === "") {
        alert("Must fill out all fields.");
    } else {
        document.getElementById("newbookform").reset();
        addBookToLibrary(title, author, summary, read);
        listLibrary(myLibrary);
    }
})