import React from 'react';
import { shallow } from 'enzyme';

// Components
import SignupPage from '../../src/components/SignupPage';

describe('<SignupPage />', () => {
  it('renders login page', () => {
    const wrapper = shallow(<SignupPage />);
    expect(wrapper.find('div'));
  });
});
