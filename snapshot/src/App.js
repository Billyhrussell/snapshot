import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  let imageRequest

  async function search(term) {
    imageRequest = await FlickrAPI.getImages(term);;
  }


  return (
    <div className="App">


    </div>
  );
}

export default App;
