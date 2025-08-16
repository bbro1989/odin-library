document.addEventListener('DOMContentLoaded', () => {
  const myLibrary = [];

  const myBookStock = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 310, read: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281, read: false },
    { title: "1984", author: "George Orwell", pages: 328, read: true },
    { title: "Pride and Prejudice", author: "Jane Austen", pages: 432, read: false },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180, read: true },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", pages: 309, read: true },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", pages: 277, read: false },
    { title: "Lord of the Flies", author: "William Golding", pages: 224, read: true },
    { title: "Dune", author: "Frank Herbert", pages: 688, read: false },
    { title: "The Alchemist", author: "Paulo Coelho", pages: 197, read: true }
  ];

  function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
  }

  function displayBooks() {
    const display = document.querySelector('.display');
    display.innerHTML = '';

    if (myLibrary.length === 0) {
      const h1 = document.createElement('h1');
      h1.textContent = "There are no books yet!";
      display.appendChild(h1);
    } else {
      myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('data-id', book.id);
        card.textContent = `Title: ${book.title}\nAuthor: ${book.author}\nPages: ${book.pages} pages\nRead: ${book.read ? 'Yes' : 'No'}`;
        
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', removeBook);
        card.appendChild(removeBtn);
        display.appendChild(card);
      });
     }
  }
  function removeBook(event) {
    const card = event.target.closest('.card'); 
    const id = card.getAttribute('data-id'); 

    
    const bookIndex = myLibrary.findIndex(book => book.id === id);
    if (bookIndex !== -1) {
      myLibrary.splice(bookIndex, 1);
    }

  
    displayBooks();
  }

  myBookStock.forEach(book => {
    addBookToLibrary(book.title, book.author, book.pages, book.read);
  });

  const dialog = document.querySelector('#bookForm');
  const newBookBtn = document.querySelector('#newBook');
  const closeBtn = document.querySelector('#formCloseBtn');
  const form = dialog.querySelector('form');
  const pagesInput = document.getElementById('pages');
  const errorDiv = document.getElementById('pagesError');

  newBookBtn.addEventListener('click', () => {
    dialog.showModal();
  });

  closeBtn.addEventListener('click', () => {
    dialog.close();
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const title = formData.get('title').trim();
    const author = formData.get('author').trim();
    const pagesValue = formData.get('pages').trim();
    const read = formData.get('status') === 'true';

    if (!/^\d+$/.test(pagesValue)) {
      errorDiv.textContent = "Please enter a valid number for pages.";
      errorDiv.classList.add('visible');
      pagesInput.focus();
      return;
    } else {
      errorDiv.classList.remove('visible');
    }

    const pages = Number(pagesValue);

    addBookToLibrary(title, author, pages, read);
    displayBooks();
    form.reset();
    dialog.close();
  });

  displayBooks();
});