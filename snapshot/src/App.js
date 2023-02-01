import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm';
import FlickrAPI from './_api';


function App() {

  let imageRequest

  async function searchBy(term) {
    imageRequest = await FlickrAPI.getImages(term);;
  }


  return (
    <div className="App">
      <SearchForm searchBy={searchBy}></SearchForm>


    </div>
  );
}

export default App;
