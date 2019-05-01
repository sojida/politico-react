import React from 'react';
import { shallow } from 'enzyme';

// Components
import Input from '../../../src/components/common/Input';

describe('<Header />', () => {
  it('renders input', () => {
    const wrapper = shallow(
      <Input
        type="password"
        id="confirm-password"
        label="Confirm Password"
        className="signLabel"
        placeholder="Confirm Password"
        required="required"
        value="test"
        onChange={() => 'changed'}
      />
    );
    expect(wrapper.find('input'));
  });
});
