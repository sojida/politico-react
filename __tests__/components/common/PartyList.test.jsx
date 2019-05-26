import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import PartyList from '../../../src/components/common/PartyList';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

const props = {
  changePartyFunc: jest.fn(),
  parties: {
    partyList: [{ id: 'id', party: 'party', partyname: 'partyname' }],
  },
};

const PartyListComponent = (
  <Provider store={store}>
    <PartyList {...props} />
  </Provider>
);

describe('<PartyList />', () => {
  it('renders login page', () => {
    const wrapper = shallow(PartyListComponent);
    expect(wrapper.find('div'));
  });
});

describe('<PartyList />', () => {
  it('renders login page', () => {
    const wrapper = shallow(<PartyList {...props} />);
    const event = { target: { value: 'pcp' } };
    expect(wrapper.find('div'));
    wrapper.find('select').simulate('change', event);
  });
});
