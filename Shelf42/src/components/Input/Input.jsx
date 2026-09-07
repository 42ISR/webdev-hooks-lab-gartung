import './Input.css';

function Input({ value, onChange, onKeyDown, placeholder }) {
  return (
    <input 
      className="input"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
    />
  );
}

export default Input;