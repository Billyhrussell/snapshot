import React from "react";
import Image from "./Image";

function ImageContainer({ imageRequest }) {
  let imageObj = imageRequest.data.photos.photo;

  return (
    <section class="overflow-hidden text-gray-700">
      <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
        <div class="flex flex-wrap -m-1 md:-m-2">
          {imageObj.map((element) => (
            <Image
              key={element.id}
              id={element.id}
              server={element.server}
              secret={element.secret}
            ></Image>
          ))}
          ;
        </div>
      </div>
    </section>
  );
}

export default ImageContainer;
