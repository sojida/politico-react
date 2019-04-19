import React from 'react';
import { shallow } from 'enzyme';

// Components
import Footer from '../../../src/components/common/Footer';

describe('<Footer />', () => {
  it('renders footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer'));
  });
});
