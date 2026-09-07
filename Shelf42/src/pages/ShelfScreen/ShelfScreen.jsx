import BookForm from '../../components/BookForm/BookForm';
import FilterChip from '../../components/FilterChip/FilterChip';
import BookList from '../../components/BookList/BookList';
import './ShelfScreen.css';

function ShelfScreen({ books, showOnlyUnread, onAddBook, onToggleRead, onDeleteBook, onFilterChange }) {
  const filteredBooks = showOnlyUnread 
    ? books.filter(book => !book.read)
    : books;

  return (
    <div className="shelf-screen">
      <p className="greeting">Добрый вечер</p>
      <p className="greeting-sub">
        {books.length === 0 
          ? 'На полке пока пусто' 
          : `На полке ${books.length} ${pluralBooks(books.length)}`}
      </p>

      <BookForm onAdd={onAddBook} />

      <div className="list-toolbar">
        <span className="toolbar-title">Книги</span>
        <FilterChip 
          checked={showOnlyUnread}
          onChange={onFilterChange}
        />
      </div>

      <BookList 
        books={filteredBooks}
        onToggleRead={onToggleRead}
        onDelete={onDeleteBook}
      />
    </div>
  );
}

function pluralBooks(n) {
  const mod10 = n % 10, mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return 'книга';
  if ([2,3,4].includes(mod10) && ![12,13,14].includes(mod100)) return 'книги';
  return 'книг';
}

export default ShelfScreen;
