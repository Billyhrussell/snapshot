import React, {useState} from "react";

function SearchForm({searchBy}) {
  const [formData, setFormData] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    searchBy(formData);
    setFormData("");
  }

  function handleChange(evt) {
    const input = evt.target;
    setFormData(input.value);
  }

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input
        id = "searchForm"
        name = "searchFrom"
        placeholder =  "Enter search term"
        onChange = {handleChange}
        value = {formData}
        aria-label="searchForm"
      />

      <button>
        Submit
      </button>
    </form>
  )
}

export default SearchForm