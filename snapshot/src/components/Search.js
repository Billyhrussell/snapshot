import React from "react";
import FlickrAPI from "../_api";

const Search = ({tag}) => {
  const imageRequests = FlickrAPI.getImages(tag)


}