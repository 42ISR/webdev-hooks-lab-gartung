import { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './BookForm.css';

function BookForm({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    const trimmedTitle = title.trim();
    if (trimmedTitle) {
      onAdd(trimmedTitle);
      setTitle('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="add-book-row">
      <Input 
        value={title}
        onChange={setTitle}
        onKeyDown={handleKeyDown}
        placeholder="Название книги..."
      />
      <Button onClick={handleSubmit}>
        Добавить на полку
      </Button>
    </div>
  );
}

export default BookForm;