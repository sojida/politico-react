import React from 'react';
import { shallow } from 'enzyme';

// Components
import Navigation from '../../../src/components/common/Navigation';

const props = {
  currentTab: 'vote-section',
};

describe('<Footer />', () => {
  it('renders footer', () => {
    const wrapper = shallow(<Navigation {...props} />);
    expect(wrapper.find('footer'));
  });
});
