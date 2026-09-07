import Button from '../Button/Button';
import './ReadingCounter.css';

function ReadingCounter({ pagesToday, onIncrement, onDecrement, onReset }) {
  return (
    <div className="session-card">
      <p className="session-title">Страниц прочитано сегодня</p>
      <p className="session-sub">Обновляйте счётчик после каждой сессии чтения</p>
      <div className="counter-row">
        <button className="counter-btn" onClick={onDecrement} disabled={pagesToday === 0}>−</button>
        <span className="counter-value">{pagesToday}</span>
        <button className="counter-btn" onClick={onIncrement}>+</button>
      </div>
      <Button className="ghost counter-reset" onClick={onReset}>
        Сбросить счётчик
      </Button>
    </div>
  );
}

export default ReadingCounter;