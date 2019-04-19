import React from 'react';
import { shallow } from 'enzyme';

// Components
import HowToBox from '../../../src/components/common/HowToBox';

describe('<HowToBox />', () => {
  it('renders how to box', () => {
    const wrapper = shallow(
      <HowToBox value="test box" icon="fas" className="box" />
    );
    expect(wrapper.find('div'));
  });
});
