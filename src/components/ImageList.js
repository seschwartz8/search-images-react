import React from 'react';

const ImageList = ({ images }) => {
  console.log(images);
  const imagesHTML = images.map(({ id, urls, description }) => {
    return <img key={id} src={urls.regular} alt={description}></img>;
  });
  return <div>{imagesHTML}</div>;
};

export default ImageList;
