import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchForm from "./components/SearchForm";
import FlickrAPI from "./_api";
import Loading from "./components/Loading";
import ImageContainer from "./components/ImageContainer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("Mountain");
  const [imageData, setImageData] = useState({});
// TODO: function so that isLoading will be false

// if(isLoading) return <Loading/>
let imageRequest;

//TODO: figure this out
useEffect(function getFirstLoad() {
  async function getFirstImages(searchTerm){
    try {
      const image = await FlickrAPI.getImages(searchTerm);
      setImageData(image);
      debugger;
      setIsLoading(false);
    }catch{
      console.error("Error");
    }}
    getFirstImages(searchTerm);
  }, [searchTerm]);


// TODO: useEffect so images can show up on render
  async function searchBy(term) {
    imageRequest = await FlickrAPI.getImages(term);
  }

  return (
    <div className="App">

      <SearchForm searchBy={searchBy}></SearchForm>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <ImageContainer imageRequest={imageRequest}></ImageContainer>
      )}
    </div>
  );
}

export default App;
