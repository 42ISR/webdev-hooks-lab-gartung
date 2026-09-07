import './BookItem.css';

const coverPalette = ['#7c5a3c', '#4f6b52', '#7a3b3b', '#3f5566', '#8a6b3f', '#5c4a72'];

function coverColor(id) {
  return coverPalette[id % coverPalette.length];
}

function BookItem({ book, onToggleRead, onDelete }) {
  const { id, title, author, read } = book;
  const initial = title.charAt(0) || '?';

  return (
    <div className="book-row">
      <div className="book-cover" style={{ background: coverColor(id) }}>
        {initial}
      </div>
      <div className="book-info">
        <p className={`book-title ${read ? 'done' : ''}`}>{title}</p>
        <div className="book-author">{author}</div>
      </div>
      <div className={`read-check ${read ? 'checked' : ''}`} onClick={onToggleRead}>
        <span className="check-circle">✓</span>
        <span className="read-label">Прочитано</span>
      </div>
      <button className="delete-btn" onClick={onDelete} title="Убрать с полки">✕</button>
    </div>
  );
}

export default BookItem;
