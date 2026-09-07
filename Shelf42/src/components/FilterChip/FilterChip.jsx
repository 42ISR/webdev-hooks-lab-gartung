import './FilterChip.css';

function FilterChip({ checked, onChange }) {
  return (
    <div className="filter-chip">
      <input 
        type="checkbox" 
        id="filterCheckbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor="filterCheckbox">
        <span className="dot"></span>
        Только непрочитанные
      </label>
    </div>
  );
}

export default FilterChip;