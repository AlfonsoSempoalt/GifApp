import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);

  const { loading } = useFetchGifs(); 

    console.log(loading)

  useEffect(() => {
    getGifs( category )
          .then(setGifs);
  }, [category]);

  return (
    <>
      <h2>{category}</h2>
      {loading?'Loading...':'Charged'}
      <section className='card-grid'>
        <p></p>
        {gifs.map(( gif ) => {
          return <GifGridItem {...gif} key={gif.id} />;
        })}
      </section>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
