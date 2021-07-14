import { shallow } from 'enzyme';
import React from 'react';
import GifGridItem from '../../components/GifGridItem';

describe('tests to <GifGridItem /> enzyme', () => {
  let wrapper = shallow(
    <GifGridItem url={'adadsadsadasd.cin'} title={'juanito'} />
  );

  beforeEach(() => {
    wrapper = shallow(<GifGridItem url={'adadsadsadasd.cin'} title={'juanito'}/>);
  });

  test('testing match to snapshot and it shows fine', () => {

    
  });
});
