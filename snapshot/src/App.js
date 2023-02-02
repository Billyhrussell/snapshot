import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchForm from "./components/SearchForm";
import FlickrAPI from "./_api";
import Loading from "./components/Loading";
import ImageContainer from "./components/ImageContainer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  // const [searchTerm, setSearchTerm] = useState("Mountain");
  const [imageData, setImageData] = useState({});
  // TODO: function so that isLoading will be false

  let imageRequest;

  //TODO: figure this out
  useEffect(
    function getFirstLoad() {
      async function getFirstImages() {
        try {
          const image = await FlickrAPI.getImages("Mountain");
          setImageData(image);
          console.log(imageData);
          setIsLoading(false);
          // debugger;
        } catch {
          console.log("Error");
        }
      }
      getFirstImages();
      // getFirstImages(searchTerm)
      // took out arg for getFirstImage and just hardcoded "Mountain"
    }, [isLoading]
  );

  if(isLoading) return (<Loading/>);

  // TODO: useEffect so images can show up on render
  async function searchBy(term) {
    imageRequest = await FlickrAPI.getImages(term);
    setImageData(imageRequest);
  }

  return (
    <div className="App">
      <SearchForm searchBy={searchBy}></SearchForm>
      {
        <ImageContainer imageRequest={imageData}></ImageContainer>
      }
    </div>
  );
}

export default App;
