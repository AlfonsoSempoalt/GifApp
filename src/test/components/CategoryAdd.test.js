import { describe, expect } from '@jest/globals';
import { shallow } from 'enzyme';
import React from 'react';
import CategoryAdd from '../../components/CategoryAdd';

describe('tests to <CategoryAdd />', () => {
    
    const setCategories=()=>{};

    const wrapper =  shallow(<CategoryAdd setCategories={setCategories} />);

    /* beforeEach(()=>{
        wrapper = shallow(<CategoryAdd />)
    });
     */

    test('should match with snapshot categoryAdd', () => {
       expect(wrapper).toMatchSnapshot(); 
    });
    

});