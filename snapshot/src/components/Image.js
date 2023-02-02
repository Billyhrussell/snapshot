
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

const Image = ({id, owner}) => {
  // debugger;
  // let imageURL= `https://www.flickr.com/photos/${owner}/${id}/`
  let imageURL= `https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg`

  return (
     <img src={imageURL} alt="" width="50" height="50"/>
  )
}

export default Image;