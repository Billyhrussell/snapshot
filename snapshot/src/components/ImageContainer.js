import React from "react";
import Image from "./Image";

function ImageContainer({ imageRequest }) {
  debugger;
  let imageObj = imageRequest.data.photos.photo;

  debugger;
  return (
    <>
      {imageObj.map((element) => (
        <Image key={element.id} id={element.id} owner={element.owner}></Image>
      ))}
    </>
  );
}

export default ImageContainer;
