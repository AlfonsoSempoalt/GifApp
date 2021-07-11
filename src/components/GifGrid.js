import React from 'react';
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

  const { data: gifs, loading } = useFetchGifs(category);

  return (
    <>
      <h2 className="animate__animated animate__fadeIn">{category}</h2>
      { loading && <p className="animate__animated animate__flash ">loading...</p> }
      <section className='card-grid'>
        <p></p>
        {gifs.map((gif) => {
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
