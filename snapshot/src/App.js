import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    const imageRequest = FlickrAPI.getImages(searchTerm);
    setSearchTerm("");
  }


  return (
    <div className="App">


    </div>
  );
}

export default App;
