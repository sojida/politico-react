import React from 'react';
import { shallow } from 'enzyme';

// Components
import ProfilePage from '../../../src/components/common/ProfilePage';

localStorage.setItem('user', '{ "id": 2, "passporturl": "url" }');

describe('<ProfilePage />', () => {
  it('renders ProfilePage', () => {
    const wrapper = shallow(<ProfilePage />);
    expect(wrapper.find('div'));
  });
});
