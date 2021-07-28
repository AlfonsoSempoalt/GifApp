import { describe, expect } from '@jest/globals';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react';
import CategoryAdd from '../../components/CategoryAdd';

describe('tests to <CategoryAdd />', () => {
  const setCategories = jest.fn();
  //esta inicialización esta hecha
  //porque si no la hago se pierde el auto completado
  let wrapper = shallow(<CategoryAdd setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<CategoryAdd setCategories={setCategories} />);
  });

  test('should match with snapshot categoryAdd', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should change the text box', () => {
    const value = 'One piece';
    wrapper.find('#inputText').simulate('change', { target: { value } });
    const inputTextValue = wrapper.find('#inputText').prop('value');
    expect(inputTextValue).toBe(value);
  });

  test('should not submit of the form', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('should call setCategories and clear the text input', () => {
    const value = 'Hola mundo';

    wrapper.find('#inputText').simulate('change', { target: { value: value } });
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(setCategories).toHaveBeenCalledWith( expect.any( Function ) );
    expect(wrapper.find('#inputText').prop('value')).not.toBe(value);
  });
});
