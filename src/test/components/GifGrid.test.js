import { describe, expect } from '@jest/globals';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('tests to <GifGrid />', () => {
  const category = 'One piece';
  //checar como poner esto de nuevo sin necesidad de andar haciendo el wrapper
  // y el useFetchfids en cada prueba
  /* let wrapper = shallow(<GifGrid category={category} />);

  beforeEach(() => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    wrapper = shallow(<GifGrid category={category} />);
  }); */

  test('the gifgrid componente should match with the snapshot', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show items when we use useFetchGifs', () => {
    const data = [
      {
        id: 0,
        title: 'hello world',
        url: 'https://holamundo.com/holaMundo.png',
      },
    ];

    useFetchGifs.mockReturnValue({
      data: data,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });
});
