const myLibrary = [] ;

const myBookStock = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 310,
    read: true
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281,
    read: false
  },
  {
    title: "1984",
    author: "George Orwell",
    pages: 328,
    read: true
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    pages: 432,
    read: false
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    read: true
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    pages: 309,
    read: true
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    pages: 277,
    read: false
  },
  {
    title: "Lord of the Flies",
    author: "William Golding",
    pages: 224,
    read: true
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    pages: 688,
    read: false
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    pages: 197,
    read: true
  }
];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary(title, author, pages, read) {
   let newBook = new Book(title, author, pages, read);
   myLibrary.push(newBook); 
}
function displayBooks(){
    let display = document.querySelector('.display');
    let h1 = document.createElement('h1');
    h1.textContent = "There is no books yet!"
    if (myLibrary.length == 0){
        display.appendChild(h1);
    }
    else {
        for ( let index in myLibrary) {
            let book = myLibrary[index];
            let card = document.createElement('div');
            card.className = 'card';
            card.textContent = `Title:${book.title}\nAuthor: ${book.author},\nPages: ${book.pages} pages,\nRead:  ${book.read}`;;
            display.appendChild(card);
        }
    }

}
for (let stock in myBookStock){
  let newBook = myBookStock[stock];
  addBookToLibrary(newBook.title, newBook.author, newBook.pages, newBook.read);
}
displayBooks();