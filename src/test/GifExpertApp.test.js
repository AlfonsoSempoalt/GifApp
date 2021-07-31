import { describe, expect } from '@jest/globals';
import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('tests to <GifExpertApp />', () => {
  const categories = ['One punch man', 'One piece'];
  let wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

  beforeEach(() => {
    wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
  });

  test('should match with the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should renderize two categories(<GifGrid />)', () => {
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
