import React from 'react';
import { shallow } from 'enzyme';

// Components
import App from '../../src/App';

describe('<App />', () => {
  it('renders header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div'));
  });
});
