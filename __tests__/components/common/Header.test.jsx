import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import Header from '../../../src/components/common/Header';
import headerContainer from '../../../src/container/header.container';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ auth: {} });

const props = {
  logout: jest.fn(),
};

const HeaderComponent = (
  <Provider store={store}>
    <Header {...props} />
  </Provider>
);

describe('<Header />', () => {
  it('renders header', () => {
    const wrapper = shallow(HeaderComponent);
    expect(wrapper.find('div'));
  });

  it('renders header', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <headerContainer {...props} />
      </Provider>
    );
    expect(wrapper.find('div'));
  });
});

describe('<Header />', () => {
  it('renders header', () => {
    const wrapper = shallow(<Header {...props} />);
    localStorage.setItem('token', 'tokem');
    expect(wrapper.find('div'));
    wrapper.instance().logout();
    wrapper.instance().checkToken();
  });
});
