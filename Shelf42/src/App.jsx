import { useState } from 'react';
import ViewSwitch from './components/ViewSwitch/ViewSwitch';
import ShelfScreen from './pages/ShelfScreen/ShelfScreen';
import StatsScreen from './pages/StatsScreen/StatsScreen';
import './App.css';

const initialBooks = [
  { id: 1, title: 'Клара и Солнце', author: 'Кадзуо Исигуро', read: true },
  { id: 2, title: 'Маленькая жизнь', author: 'Ханья Янагихара', read: false },
  { id: 3, title: 'Пиранези', author: 'Сюзанна Кларк', read: false },
];

let nextId = 4;

function App() {
  const [currentScreen, setCurrentScreen] = useState('shelf');
  const [books, setBooks] = useState(initialBooks);
  const [showOnlyUnread, setShowOnlyUnread] = useState(false);
  const [pagesToday, setPagesToday] = useState(0);

  const handleAddBook = (title) => {
    const newBook = {
      id: nextId++,
      title,
      author: 'Автор не указан',
      read: false
    };
    setBooks(prev => [...prev, newBook]);
  };

  const handleToggleRead = (id) => {
    setBooks(prev => prev.map(book => 
      book.id === id ? { ...book, read: !book.read } : book
    ));
  };

  const handleDeleteBook = (id) => {
    setBooks(prev => prev.filter(book => book.id !== id));
  };

  const handleFilterChange = (checked) => {
    setShowOnlyUnread(checked);
  };

  const handleIncrementPages = () => {
    setPagesToday(prev => prev + 1);
  };

  const handleDecrementPages = () => {
    setPagesToday(prev => Math.max(0, prev - 1));
  };

  const handleResetPages = () => {
    setPagesToday(0);
  };

  return (
    <div className="app">
      <div className="app-header">
        <div className="brand">
          <div className="brand-mark">S</div>
          <div className="brand-name">Shelf</div>
        </div>
        <ViewSwitch 
          currentScreen={currentScreen}
          onChange={setCurrentScreen}
        />
      </div>

      {currentScreen === 'shelf' ? (
        <ShelfScreen 
          books={books}
          showOnlyUnread={showOnlyUnread}
          onAddBook={handleAddBook}
          onToggleRead={handleToggleRead}
          onDeleteBook={handleDeleteBook}
          onFilterChange={handleFilterChange}
        />
      ) : (
        <StatsScreen 
          books={books}
          pagesToday={pagesToday}
          onIncrement={handleIncrementPages}
          onDecrement={handleDecrementPages}
          onReset={handleResetPages}
        />
      )}
    </div>
  );
}

export default App;