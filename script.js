const myLibrary = [];
const libContainer = document.getElementById('book-container');

function Book(title, author, summary) {
  this.title = title;
  this.author = author;
  this.summary = summary;
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}

myLibrary.push(new Book('The Hobbit', "J.R.R. Tolkein", 'test'));

function listLibrary(lib) {
    for (let i=0; i < lib.length; i++) {
        const div = document.createElement('div');
        const title = document.createElement('h2');
        const author = document.createElement('h3');
        const summary = document.createElement('p');

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

listLibrary(myLibrary);