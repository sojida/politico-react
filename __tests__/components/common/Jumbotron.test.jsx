import React from 'react';
import { shallow } from 'enzyme';

// Components
import Jumbotron from '../../../src/components/common/Jumbotron';

describe('<Jumbotron />', () => {
  it('renders jumbotron', () => {
    const wrapper = shallow(<Jumbotron />);
    expect(wrapper.find('div'));
  });
});
