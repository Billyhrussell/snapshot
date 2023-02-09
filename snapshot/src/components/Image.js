
import React from  "react";

//imgObj = {
  // "photos": {
  //   "page": 1,
  //   "pages": 3679,
  //   "perpage": 20,
  //   "total": 73580,
  //   "photo": [
  //     {
  //       "id": "52661442699",
  //       "owner": "8132117@N03",
  //       "secret": "d2c6d1e7f1",
  //       "server": "0",
  //       "farm": 0,
  //       "title": "DJI_0385",
  //       "ispublic": 1,
  //       "isfriend": 0,
  //       "isfamily": 0
  //     },
  //     {
  //       "id": "52661608539",
  //       "owner": "8132117@N03",
  //       "secret": "c34bd78552",
  //       "server": "65535",
  //       "farm": 66,
  //       "title": "DJI_0347",
  //       "ispublic": 1,
  //       "isfriend": 0,
  //       "isfamily": 0
  //     },

const Image = ({id, server, secret, isLarge}) => {
  // debugger;
  let imageURL= `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`
  // let imageURL= `https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg`

  debugger;
  function small(){
    return (
      <div class="w-1/2 p-1 md:p-2">
        <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
    src={imageURL}></img>
    </div>)
  }

  function large(){
    return ( <div class="w-full p-1 md:p-2">
    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
    src={imageURL}></img>
    </div>)
  }
  return (
     <> { isLarge ? large() : small()} </>
  )
}

export default Image;

{/* <img src={imageURL} alt=""/> */}

//  <> { isLarge ? large() : small()} </>

{/* <img src={imageURL} alt=""/> */}
