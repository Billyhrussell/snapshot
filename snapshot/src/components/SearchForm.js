import React from "react";
import FlickrAPI from "../_api";


//TODO: create function for setFormData
const handleSubmit = (evt) => {
  evt.preventDefault();
  const imageRequest = FlickrAPI.getImages(formData);
  setFormData(initial);
}

function handleChange(evt) {
  const { name, value } = evt.target;
  setFormData(fData => ({
    ...fData,
    [name]: value,
  }))
}

const SearchForm = ({})