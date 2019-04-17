import React from 'react';
import { render } from 'enzyme';

// Components
import Header from '../../src/components/Header';

describe('<Foo />', () => {
  it('renders header', () => {
    const wrapper = render(<Header />);
    expect(wrapper.find('header'));
    expect(wrapper.find('nav'));
  });
});
