import React from 'react';
import { shallow } from 'enzyme';

// Components
import Button from '../../../src/components/common/Button';

describe('<Button />', () => {
  it('renders button', () => {
    const wrapper = shallow(<Button value="sign up" className="btn" />);
    expect(wrapper.find('button'));
    expect(wrapper.hasClass('btn'));
  });
});
