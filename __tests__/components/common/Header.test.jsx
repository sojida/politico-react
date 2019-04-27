import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Header from '../../../src/components/common/Header';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Header />', () => {
  it('renders header', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(wrapper.find('header'));
    expect(wrapper.find('nav'));
  });
});
