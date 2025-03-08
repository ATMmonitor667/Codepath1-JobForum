import React, { useState } from "react";
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [search, setSearch] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(search);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className="container">
      <form className="inputForm" onSubmit={handleSubmit}>
      <SearchIcon className = "icon" style={{ fontSize: 35, color: "grey" }} />
        <input
          className="Searchbar"
          type="text"
          name="Search"
          placeholder="Search Job"
          value={search} // Corrected value binding
          onChange={handleInputChange}
        />
        <button className = "theButton"type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;