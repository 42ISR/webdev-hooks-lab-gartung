import StatsSummary from '../../components/StatsSummary/StatsSummary';
import ReadingCounter from '../../components/ReadingCounter/ReadingCounter';
import './StatsScreen.css';

function StatsScreen({ books, pagesToday, onIncrement, onDecrement, onReset }) {
  return (
    <div className="stats-screen">
      <p className="greeting">Статистика</p>
      <p className="greeting-sub">Как продвигается чтение</p>

      <StatsSummary books={books} />
      
      <ReadingCounter 
        pagesToday={pagesToday}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onReset={onReset}
      />
    </div>
  );
}

export default StatsScreen;
