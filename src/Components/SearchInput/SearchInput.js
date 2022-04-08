import "./search-input.scss";
import Delete from "../../assets/images/delete.svg";
import { useState } from "react";
const SearchInput = ({ setSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
    event.target.value.length >= 0 &&
      event.target.value.length < 3 &&
      setSearch("");
    event.target.value.length >= 3 && setSearch(event.target.value);
  };

  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="Votre recherche..."
        onChange={handleChange}
        value={inputValue}
      />
      {inputValue && (
        <img
          src={Delete}
          alt="delete icon"
          onClick={() => {
            setSearch("");
            setInputValue("");
          }}
        />
      )}
    </div>
  );
};

export default SearchInput;
