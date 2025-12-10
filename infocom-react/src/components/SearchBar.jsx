import './SearchBar.css'

function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Nome do produto"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && <button onClick={() => onChange('')}>X</button>}
    </div>
  )
}

export default SearchBar;