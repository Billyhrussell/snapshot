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
    <form className="SearchForm flex p-10 justify-center" onSubmit={handleSubmit}>
      <input
        id = "searchForm"
        name = "searchFrom"
        placeholder =  "Enter search term"
        onChange = {handleChange}
        value = {formData}
        aria-label="searchForm"
        className="block md:w-1/5 p-2 text-black-900 border border-gray-300 rounded-lg bg-gray-50 text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />

      <button
        className="w-24 mx-1 h-min bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Search
      </button>
    </form>
  )
}

export default SearchForm