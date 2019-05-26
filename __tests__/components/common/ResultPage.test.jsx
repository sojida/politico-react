import React from 'react';
import { shallow } from 'enzyme';

// Components
import ResultPage from '../../../src/components/common/ResultPage';

localStorage.setItem('user', '{ "id": 2, "passporturl": "url" }');

describe('<ResultPage />', () => {
  it('renders ResultPage', () => {
    const wrapper = shallow(<ResultPage />);
    expect(wrapper.find('div'));
    wrapper.instance().changeOffice(2);
  });
});
