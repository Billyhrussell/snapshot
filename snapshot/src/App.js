import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchForm from "./components/SearchForm";
import FlickrAPI from "./_api";
import Loading from "./components/Loading";
import ImageContainer from "./components/ImageContainer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  let imageRequest;

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
