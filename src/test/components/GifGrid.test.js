import { describe, expect } from '@jest/globals';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('tests to <GifGrid />', () => {
  const category = 'One piece';

  test('the gifgrid componente should match with the snapshot', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show items when we use useFetchGifs', () => {
    const gifs = [
      {
        id: 0,
        title: 'hello world',
        url: 'https://holamundo.com/holaMundo.png',
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe( gifs.length );
  });
});
