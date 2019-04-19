import React from 'react';
import { shallow } from 'enzyme';

// Components
import Hompage from '../../src/components/Hompage';

describe('<Header />', () => {
  it('renders header', () => {
    const wrapper = shallow(<Hompage />);
    expect(wrapper.find('header'));
    expect(wrapper.find('nav'));
    expect(wrapper.find('div'));
  });
});
