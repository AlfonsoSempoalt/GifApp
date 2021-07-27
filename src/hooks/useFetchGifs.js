import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((gifs) => {

        setState({
          data: gifs,
          loading: false,
        });
    });

  }, [category]);

  return state; // data: [aquí van los gifs o datos que se ejecutan dentro de la petición en fetch]    ---      loading : true
};
