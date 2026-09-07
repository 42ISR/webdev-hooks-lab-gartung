import './Checkbox.css';

function Checkbox({ id, checked, onChange, label }) {
  return (
    <div className="checkbox-wrapper">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default Checkbox;