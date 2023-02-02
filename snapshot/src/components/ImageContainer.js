import React from "react";
import Image from "./Image";

function ImageContainer({ imageRequest }) {
  let imageObj = imageRequest.data.photos.photo;

  return (
    <>
      {imageObj.map((element) => (
        <Image
          key={element.id}
          id={element.id}
          server={element.server}
          secret={element.secret}
        ></Image>
      ))}
    </>
  );
}

export default ImageContainer;
