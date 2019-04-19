import React from 'react';
import { shallow } from 'enzyme';

// Components
import NotFound from '../../src/components/NotFound';

describe('<Header />', () => {
  it('renders 404 page', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.find('img'));
  });
});
