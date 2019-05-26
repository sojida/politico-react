import React from 'react';
import { shallow } from 'enzyme';

// Components
import Loader from '../../../src/components/common/Loader';

describe('<Footer />', () => {
  it('renders footer', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find('footer'));
  });
});
