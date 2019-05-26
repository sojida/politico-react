import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import UserPage from '../../src/components/UserPage';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

const props = {
  getAllOffices: jest.fn(),
  getAllParties: jest.fn(),
  offices: {
    officeList: [{ id: 'id', party: 'party', partyname: 'partyname' }],
    selectedOffice: [{ id: 'id', party: 'party', partyname: 'partyname' }],
    loading: true,
  },
  parties: {
    partyList: [{ id: 'id', party: 'party', partyname: 'partyname' }],
    selectedParty: [{ id: 'id', party: 'party', partyname: 'partyname' }],
    loading: true,
  },
};

const UserPageComponent = (
  <Provider store={store}>
    <UserPage {...props} />
  </Provider>
);

describe('<UserPage />', () => {
  it('renders UserPage', () => {
    const wrapper = shallow(UserPageComponent);
    expect(wrapper.find('div'));
  });
});

describe('<AdminPage />', () => {
  it('renders UserPage', () => {
    const wrapper = shallow(<UserPage {...props} />);
    localStorage.setItem(
      'user',
      '{ "id": 2, "passporturl": "url", "isadmin": true }'
    );
    expect(wrapper.find('div'));
    wrapper.instance().changeTab('vote-section');
  });
});
