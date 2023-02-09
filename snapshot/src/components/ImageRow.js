import React from "react";
import Image from "./Image";


function ImageRow({images, index}){

  //images = [[{photodata}, {photodata}, {photodata}]
  //index = 0
  //if even, last pic large


// if imageObj is even,
// first two small
// third one big
// else imageObj is odd,
// first one big
// second, third small

  let isEven = true;

  if(index % 2 === 0){
    isEven = true;
  }else{
    isEven = false;
  }

  let isLarge = false;

  function setIsLarge(i){
    if(isEven === true){
      if(i === 2){
        isLarge = true;
      }
    }else if(isEven === false){
      if(i === 0){
        isLarge = true;
      }
    }else{
      isLarge = false;
    }
  }

  //TODO: set is Large not working this way
  //SENDS ONE OF THREE FROM ARRAY
  return (
    <div class="flex flex-wrap w-1/2">

     {images.map((element, i) => (
      //  if(isEven === true && i === 2){isLarge = true;}
      // setIsLarge(i)

            <Image
              key={element.id}
              id={element.id}
              server={element.server}
              secret={element.secret}
              isLarge={setIsLarge(i)}
            ></Image>
          ))}
          ;

    </div>

  );
}

export default ImageRow;