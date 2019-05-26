import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import LoginPage from '../../src/components/LoginPage';

const initialState = {
  auth: {
    loading: false,
    isAdmin: false,
    redirect: false,
    token: null,
  },
};

const props = {
  login: jest.fn(),
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(initialState);

const LoginPageComponent = (
  <Provider store={store}>
    <LoginPage auth={{ fake: 'yup' }} {...props} />
  </Provider>
);

describe('<LoginPage />', () => {
  it('renders login page', () => {
    const wrapper = shallow(LoginPageComponent);
    expect(wrapper.find('div'));
  });
});

describe('<LoginPage />', () => {
  it('renders login page', () => {
    const inputEvent = { target: { id: 'name', value: 'pcp' } };
    const wrapper = shallow(<LoginPage auth={{ fake: 'yup' }} {...props} />);
    expect(wrapper.find('div'));
    wrapper.instance().handleChange(inputEvent);
    wrapper.instance().handleClick();
  });
});
