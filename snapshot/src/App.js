import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchForm from "./components/SearchForm";
import FlickrAPI from "./_api";
import Loading from "./components/Loading";
import ImageContainer from "./components/ImageContainer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [imageData, setImageData] = useState({});

  let imageRequest;

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
          debugger;
        }
      }
      getFirstImages();
      // getFirstImages(searchTerm)
      // took out arg for getFirstImage and just hardcoded "Mountain"
    }, [isLoading]
  );


  if(isLoading) return (<Loading/>);

  async function searchBy(term) {
    imageRequest = await FlickrAPI.getImages(term);
    setImageData(imageRequest);
  }

  return (
    <div className="App">
      {
        <SearchForm searchBy={searchBy}></SearchForm>
      }
      {
        <ImageContainer imageRequest={imageData}></ImageContainer>
      }
    </div>
  );
}

export default App;
