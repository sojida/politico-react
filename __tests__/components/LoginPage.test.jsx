import React from 'react';
import { shallow } from 'enzyme';

// Components
import LoginPage from '../../src/components/LoginPage';

describe('<LoginPage />', () => {
  it('renders login page', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper.find('div'));
  });
});
