const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];


const add = function(books, bookName) {
  const myBooks = [...books];
  myBooks.push(bookName);
  return myBooks;
}

const remove = function(books, bookName) {
  const myBooks = [...books];
  const book_index = books.indexOf(bookName);

  if (book_index >= 0) {
    myBooks.splice(book_index, 1);
    return myBooks;
  }
}

const newBookList = add(bookList, 'A Brief History of Time');
const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
const newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList); 
