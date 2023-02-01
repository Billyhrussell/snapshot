import React, {useState} from "react";

function SearchForm({searchBy}) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    searchBy(searchTerm);
    setSearchTerm("");
  }

  function handleChange(evt) {
    const input = evt.target;
    setSearchTerm(input.value);
  }

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input
        id = "searchForm"
        name = "searchFrom"
        placeholder =  "Enter search term"
        onChange = {handleChange}
        value = {searchTerm}
        aria-label="searchForm"
      />

      <button>
        Submit
      </button>
    </form>
  )
}

export default SearchForm