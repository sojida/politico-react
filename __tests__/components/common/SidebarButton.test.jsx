import React from 'react';
import { shallow } from 'enzyme';

// Components
import SidebarButton from '../../../src/components/common/SidebarButton';

const props = {
  value: 'value',
  iconClass: 'fa fa-user',
  onClick: jest.fn(),
};

describe('<SidebarButton />', () => {
  it('renders SidebarButton', () => {
    const wrapper = shallow(<SidebarButton {...props} />);
    expect(wrapper.find('div'));
  });
});
