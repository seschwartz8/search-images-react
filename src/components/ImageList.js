import React from 'react';
import '../css/ImageList.css';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  const imagesHTML = images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className='image-list'>{imagesHTML}</div>;
};

export default ImageList;
