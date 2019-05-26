import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import PoliticianPage from '../../../src/components/common/PoliticianPage';
import PoliticianCantainer from '../../../src/container/politician.container';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

const props = {
  getOfficeById: jest.fn(),
  getPartyById: jest.fn(),
  declareInterest: jest.fn(),
  offices: {
    officeList: [{ id: 'id', party: 'party', partyname: 'partyname' }],
    selectedOffice: [{ id: 'id', party: 'party', partyname: 'partyname' }],
  },
  parties: {
    partyList: [{ id: 'id', party: 'party', partyname: 'partyname' }],
    selectedParty: [{ id: 'id', party: 'party', partyname: 'partyname' }],
  },
};

const PoliticianPageComponent = (
  <Provider store={store}>
    <PoliticianPage {...props} />
  </Provider>
);

describe('<PoliticianPage />', () => {
  it('renders login page', () => {
    const wrapper = shallow(PoliticianPageComponent);
    expect(wrapper.find('div'));
  });

  it('renders login page', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <PoliticianCantainer />
      </Provider>
    );
    expect(wrapper.find('div'));
  });
});

describe('<AdminPage />', () => {
  it('renders login page', () => {
    const wrapper = shallow(<PoliticianPage {...props} />);
    localStorage.setItem('user', '{ "id": 2, "passporturl": "url" }');
    expect(wrapper.find('div'));
    wrapper.instance().selectOffice(2);
    wrapper.instance().selectParty(2);
    wrapper.instance().declareInterest(2);
  });
});
