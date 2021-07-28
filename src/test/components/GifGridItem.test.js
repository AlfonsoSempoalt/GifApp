import { shallow } from 'enzyme';
import React from 'react';
import GifGridItem from '../../components/GifGridItem';
import { describe, expect } from '@jest/globals';

describe('tests to <GifGridItem /> with enzyme', () => {
  const url = 'testing.com';
  const title = 'test';

  let wrapper = shallow(<GifGridItem url={url} title={title} />);

  beforeEach(() => {
    wrapper = shallow(<GifGridItem url={url} title={title} />);
  });

  test('should match the wrapper with the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('the title should a string with text', () => {
    const testingTitle = wrapper.find('h4').text();
    expect(testingTitle).toBe(title);
  });

  test('should have an url matching with the props url and must have an alt the img', () => {
    const testingIMG = wrapper.find('img');
    const urlImg = testingIMG.prop('src');
    const altImg = testingIMG.prop('alt');

    expect(urlImg).toEqual(url);
    expect(altImg).toEqual(title);
  });

  test('should have an animate_fadeIn class', () => {
    const testingSection = wrapper.find('section');
    const classNameProperty = testingSection.prop('className');
    

    expect(classNameProperty.includes('animate__fadeIn')).toEqual(true);
  });
  
});
