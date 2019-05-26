import React from 'react';
import { shallow } from 'enzyme';

// Components
import ProfileCard from '../../../src/components/common/ProfileCard';

localStorage.setItem('user', '{ "id": 2, "passporturl": "url" }');

describe('<ProfileCard />', () => {
  it('renders ProfileCard', () => {
    const wrapper = shallow(<ProfileCard />);
    expect(wrapper.find('div'));
    wrapper.instance().handleChange();
    wrapper.instance().changePassport('newurl');
  });
});
