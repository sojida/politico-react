import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import LoginPage from '../../src/components/LoginPage';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<LoginPage />', () => {
  it('renders login page', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    expect(wrapper.find('div'));
  });
});
