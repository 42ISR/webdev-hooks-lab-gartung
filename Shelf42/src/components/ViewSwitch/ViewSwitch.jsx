import './ViewSwitch.css';

function ViewSwitch({ currentScreen, onChange }) {
  return (
    <div className="view-switch">
      <button 
        className={`view-btn ${currentScreen === 'shelf' ? 'active' : ''}`}
        onClick={() => onChange('shelf')}
      >
        Моя полка
      </button>
      <button 
        className={`view-btn ${currentScreen === 'stats' ? 'active' : ''}`}
        onClick={() => onChange('stats')}
      >
        Статистика
      </button>
    </div>
  );
}

export default ViewSwitch;