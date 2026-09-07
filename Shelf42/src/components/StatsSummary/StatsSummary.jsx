import StatCard from '../StatCard/StatCard';
import './StatsSummary.css';

function StatsSummary({ books }) {
  const total = books.length;
  const unread = books.filter(book => !book.read).length;
  const read = total - unread;

  return (
    <div className="stats-row">
      <StatCard value={total} label="На полке" />
      <StatCard value={unread} label="Непрочитано" />
      <StatCard value={read} label="Прочитано" />
    </div>
  );
}

export default StatsSummary;