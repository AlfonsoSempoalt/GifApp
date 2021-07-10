import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs();
  },[]);

  const getGifs = async () => {
    const url =
      'https://api.giphy.com/v1/gifs/search?q=OnePiece&limit=15&api_key=XldqhgQr2Dgg65t15bK7dGk8ztMOxsTL';
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map((image) => {
      return {
        id: image.id,
        title: image.title,
        url: image.images?.downsized_medium.url,
      };
    });
    setGifs(gifs);
    console.log(gifs);
  };

  return (
    <>
      <h3>{ category }</h3>
      <ol> 
       { 
          gifs.map(( gif ) => {
          return <li key={ gif.id }> { gif.title } </li>;
        }
        )}
      </ol>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
