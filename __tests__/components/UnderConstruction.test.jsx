import React from 'react';
import { shallow } from 'enzyme';

// Components
import UnderConstruction from '../../src/components/UnderConstruction';

describe('<Header />', () => {
  it('renders under construction page', () => {
    const wrapper = shallow(<UnderConstruction />);
    expect(wrapper.find('img'));
  });
});
