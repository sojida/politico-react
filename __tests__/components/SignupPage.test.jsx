import React from 'react';
import { shallow } from 'enzyme';

// Components
import SignupPage from '../../src/components/SignupPage';

describe('<SignupPage />', () => {
  it('renders login page', () => {
    const wrapper = shallow(<SignupPage />);
    const inputEvent = { target: { id: 'email', value: 'mail@mail.com' } };
    expect(wrapper.find('div'));
    wrapper.instance().handleChange(inputEvent);
    wrapper.instance().handleClick();
  });
});
