import BookItem from '../BookItem/BookItem';
import './BookList.css';

function BookList({ books, onToggleRead, onDelete }) {
  if (books.length === 0) {
    return <div className="empty-note">Нет книг, подходящих под фильтр</div>;
  }

  return (
    <div className="book-list">
      {books.map(book => (
        <BookItem 
          key={book.id}
          book={book}
          onToggleRead={() => onToggleRead(book.id)}
          onDelete={() => onDelete(book.id)}
        />
      ))}
    </div>
  );
}

export default BookList;