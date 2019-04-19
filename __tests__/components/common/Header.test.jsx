import React from 'react';
import { shallow } from 'enzyme';

// Components
import Header from '../../../src/components/common/Header';

describe('<Header />', () => {
  it('renders header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('header'));
    expect(wrapper.find('nav'));
  });
});
